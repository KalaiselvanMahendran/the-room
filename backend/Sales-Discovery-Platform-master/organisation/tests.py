from django.test import TestCase
from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import APIRequestFactory, force_authenticate

from organisation.models import Company, Hyperlink
from organisation.serializers import CompanySerializer
from organisation.views import CompanyViewSet
from users.factories import UserFactory
from users.models import User
from .factories import SegmentFactory, IndustryFactory, CompanyFactory, HyperlinkFactory

# Create your tests here.
from faker import Faker

fake = Faker()
req_factory = APIRequestFactory()


class SegmentModelTestCase(TestCase):

    def create_user_and_set_password(self, password=None):
        if not password:
            password = fake.password()
        user = UserFactory()
        user.set_password(password)
        user.save()
        return user, password

    def test_company_domain_field_is_autofilled_from_email_of_company_admin(self):
        """ backend can automatically fill in the company domain field from the email of company admin to ensure the
         consistency of the company domain"""
        user, password = self.create_user_and_set_password()
        user.mode = User.COMPANY_ADMIN
        user.save()
        view = CompanyViewSet.as_view({'post': 'create'})

        segment = SegmentFactory()
        industry1 = IndustryFactory()
        company = CompanyFactory(target_segments=(segment,),
                                 target_industries=(industry1,))
        company.email = 'skdfjwe@tato.com'

        serializer = CompanySerializer(company)
        data = serializer.data
        data.pop('id')  # json data with no id to upload for create request

        request = req_factory.post(reverse('company-list'), data, format='json')
        force_authenticate(request, user=user)  # authenticating with the created user
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        """ test if company domain is reflected"""

        domain = user.email.split('@')[1]
        company = Company.objects.get(email='skdfjwe@tato.com')
        self.assertEqual(company.domain, domain, 'domain of company is not the same as admin')
