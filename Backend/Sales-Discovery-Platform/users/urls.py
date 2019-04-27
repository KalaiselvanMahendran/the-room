from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include
from .views import (UserProfileViewSet,
                    DepartmentViewSet,
                    RoleInCompanyViewSet,
                    TemporaryUserProfileViewSet,
                    csv_userprofiles_upload_view, UserViewSet)

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'user_profile', UserProfileViewSet, basename='user_profile')
router.register(r'department', DepartmentViewSet, basename='department')
router.register(r'role_in_company', RoleInCompanyViewSet, basename='role_in_company')
router.register(r'temporary_user_profile', TemporaryUserProfileViewSet, basename='temporary_user_profile')

urlpatterns = router.urls

urlpatterns += [
    url(r'^csv_userprofiles_upload$', csv_userprofiles_upload_view),

]
