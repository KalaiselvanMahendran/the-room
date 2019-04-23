
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User,UserProfile,TemporaryUserProfile
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django import forms


class MyUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User


class MyUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User


class MyUserAdmin(UserAdmin):
    form = MyUserChangeForm
    add_form = MyUserCreationForm
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('mode',)}),
    )

admin.site.register(User, MyUserAdmin)
admin.site.register(UserProfile)
admin.site.register(TemporaryUserProfile)