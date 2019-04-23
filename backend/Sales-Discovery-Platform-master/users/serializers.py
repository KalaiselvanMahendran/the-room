from rest_framework.serializers import (
    ModelSerializer,
    FileField,
    Serializer,
)

from .models import UserProfile, User, Department, RoleInCompany, TemporaryUserProfile


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'mode',
        ]

    read_only_fields = [
        'mode'
    ]


class UserModeChangeSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'mode',
        ]
        read_only_fields = [
            'id',
            'email',
        ]


class UserProfileUpdateCheckSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'updated'
        ]


class UserProfileSerializer(ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = UserProfile
        fields = [
            'id',
            'user',
            'company',
            'role_in_company',
            'department',
            'phone_number',
            'address',
            'updated',
        ]

        read_only_fields = [
            'updated'
        ]

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        # Unless the application properly enforces that this field is
        # always set, the follow could raise a `DoesNotExist`, which
        # would need to be handled.
        user = instance.user
        user.first_name = user_data.get('first_name', user.first_name)
        user.last_name = user_data.get('last_name', user.last_name)
        user.save()

        instance.company = validated_data.get('company', instance.company)
        instance.role_in_company = validated_data.get('role_in_company', instance.role_in_company)
        instance.department = validated_data.get('department', instance.department)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.address = validated_data.get('address', instance.address)
        instance.updated = True
        instance.save()

        return instance


class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = Department
        fields = [
            'id',
            'name',
        ]


class RoleInCompanySerializer(ModelSerializer):
    class Meta:
        model = RoleInCompany
        fields = [
            'id',
            'position',
        ]


class TemporaryUserProfileSerializer(ModelSerializer):
    class Meta:
        model = TemporaryUserProfile
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'company',
            'added_by',
        ]


class FileSerializer(Serializer):
    file = FileField()
