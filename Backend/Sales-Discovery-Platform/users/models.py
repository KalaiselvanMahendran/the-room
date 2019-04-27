from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.db.models.signals import post_save
from django.dispatch import receiver

from organisation.models import Company


class User(AbstractUser):
    COMPANY_ADMIN = 'company_admin'
    COMPANY_EMP = 'company_employee'
    USER_MODE_CHOICES = (
        (COMPANY_ADMIN, 'Company Admin'),
        (COMPANY_EMP, 'Company Employee'),
    )
    mode = models.CharField(max_length=50, choices=USER_MODE_CHOICES, default=COMPANY_EMP)

    def __str__(self):
        return self.username


class Department(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class RoleInCompany(models.Model):
    position = models.CharField(max_length=255)

    def __str__(self):
        return self.position


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, editable=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True, blank=True)
    phone_number = PhoneNumberField(null=True, blank=True)
    address = models.TextField(null=True, blank=True)
    department = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)
    role_in_company = models.ForeignKey(RoleInCompany, on_delete=models.SET_NULL, null=True, blank=True)
    updated = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user)


class TemporaryUserProfile(models.Model):
    """
	When a company admin adds employee details to the platform, they are initially saved here.
	Later when the individual users actually login for the first time, these details are shifted to UserProfile model
	"""

    company = models.ForeignKey(Company, on_delete=models.CASCADE, editable=False,null=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(unique=True)
    added_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, editable=False, null=True)

    def __str__(self):
        return str(self.email)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
        email = instance.email
        domain = email.split('@')[1]
        company_exists = Company.objects.filter(domain=domain).exists()
        if not company_exists:
            ''' there is no company with such a domain, so this is a new company and user is the first user in company 
            therefore this user must be made the admin of company'''
            instance.mode = User.COMPANY_ADMIN

        else:
            instance.mode = User.COMPANY_EMP
        instance.save()



# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.userprofile.save()
