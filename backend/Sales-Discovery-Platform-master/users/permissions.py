from rest_framework import permissions
from .models import User


class IsCompanyAdmin(permissions.BasePermission):
    message = "Your are not the admin of any company"

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.mode == User.COMPANY_ADMIN


class IsGlobalAdminStaff(permissions.BasePermission):
    message = "You do not have Admin Staff permissions"

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.is_staff
