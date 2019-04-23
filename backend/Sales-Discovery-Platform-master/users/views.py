from django.db import IntegrityError
from django.shortcuts import render
from rest_framework import viewsets, mixins, views
from .models import UserProfile, Department, RoleInCompany, TemporaryUserProfile, User
from .serializers import FileSerializer, UserProfileUpdateCheckSerializer, UserProfileSerializer, \
    RoleInCompanySerializer, DepartmentSerializer, TemporaryUserProfileSerializer, UserModeChangeSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .permissions import IsCompanyAdmin, IsCompanyAdmin, IsGlobalAdminStaff
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse, Http404
from rest_framework import status
from rest_framework.decorators import action

from django.shortcuts import redirect
from django.urls import reverse
import json
from django.core.mail import send_mail
from django.conf import settings
from tablib import Dataset

from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser

class UserViewSet(mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    permission_classes = [IsCompanyAdmin]
    serializer_class = UserModeChangeSerializer

    def get_queryset(self):

        company_id = self.request.user.userprofile.company
        queryset = User.objects.filter(userprofile__company=company_id)

        return queryset


class UserProfileViewSet(mixins.RetrieveModelMixin,
                         mixins.UpdateModelMixin,
                         mixins.ListModelMixin,
                         viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        user = self.request.user
        queryset = UserProfile.objects.filter(user=user)

        if not queryset.exists():
            '''
			UserProfile instance creation and connceting it with the currently logged in  User is handled by post_save signals from User Model
			Suppose this signals fails to create the UserProfile associated with the logged in user, its handled here
			'''
            UserProfile.objects.create(user=user)
            queryset = UserProfile.objects.filter(user=user)

        return queryset

    def get_serializer_class(self):
        if self.action == 'profile_updated':
            return UserProfileUpdateCheckSerializer
        else:
            return UserProfileSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

    def get_permissions(self):

        if self.action == 'create':
            permission_classes = [IsCompanyAdmin]
        elif self.action in ['list', 'retrieve']:
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsGlobalAdminStaff]
        return [permission() for permission in permission_classes]


class RoleInCompanyViewSet(viewsets.ModelViewSet):
    serializer_class = RoleInCompanySerializer
    queryset = RoleInCompany.objects.all()

    def get_permissions(self):

        if self.action == 'create':
            permission_classes = [IsCompanyAdmin]
        elif self.action in ['list', 'retrieve']:
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsGlobalAdminStaff]
        return [permission() for permission in permission_classes]


class TemporaryUserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = TemporaryUserProfileSerializer

    permission_classes = [IsCompanyAdmin]

    def get_queryset(self):
        user = self.request.user
        company = user.userprofile.company
        return TemporaryUserProfile.objects.filter(company=company)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        user = self.request.user
        currentprofile = UserProfile.objects.get(user=user)

        serializer.save(company=currentprofile.company, added_by=user)


class CsvUserProfileUploadView(views.APIView):
    serializer_class = FileSerializer
    permission_classes = [IsCompanyAdmin]

    def post(self, request):

        success = False
        message = ''
        dataset = Dataset()

        new_profiles = request.FILES['file']
        print('-----> ', new_profiles)
        imported_data = dataset.load(new_profiles.read().decode('utf-8'), format='csv')
        recipient_list = []
        try:
            company = UserProfile.objects.get(user=request.user).company
            for row in dataset:
                temporary_profile = TemporaryUserProfile()
                temporary_profile.company = company
                temporary_profile.first_name = row[0]
                temporary_profile.last_name = row[1]
                temporary_profile.email = row[2]
                temporary_profile.save()

                recipient_list.append(temporary_profile.email)

            send_email_invites(recipient_list)
            success = True

        except (TemporaryUserProfile.DoesNotExist, UserProfile.DoesNotExist):
            status = False
            message = 'Possible causes : error in CSV, your profile is not complete'
        except IntegrityError as e:
            status = False
            message = str(e)
        except:
            status = False
            message = 'Unexpected Error'
        return JsonResponse({'upload_status': success, 'message': message})


csv_userprofiles_upload_view = CsvUserProfileUploadView.as_view()


def send_email_invites(recipient_list):
    subject = 'Sign In to Sales Discovery Platform'
    message = """
        Hai,
        
        You are invited to join Sales Discovery Platform.
        Click the link : http://sales-discovery-platform.herokuapp.com/login
        
        Bye !
    """
    email_from = settings.EMAIL_HOST_USER
    send_mail(subject, message, email_from, recipient_list)
