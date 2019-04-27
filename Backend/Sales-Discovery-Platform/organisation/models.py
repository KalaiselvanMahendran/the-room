from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Segment(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Industry(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Company(models.Model):
    PUBLIC_FUNDING = 'public'
    PRIVATE_FUNDING = 'private'
    NO_FUNDING = 'no'
    COMPANY_FUNDING_CHOICES = (
        (PUBLIC_FUNDING, 'Public Funding'),
        (PRIVATE_FUNDING, 'Private Funding'),
        (NO_FUNDING, 'No'),
    )
    name = models.CharField(max_length=255, help_text="Name of the Company")
    domain = models.CharField(max_length=255, help_text="Domain of the Company")
    phone_number = PhoneNumberField(
        help_text="Phone Number in E164 format which includes the country code also. eg : +91984765854")
    head_quaters = models.CharField(max_length=255)
    region_of_operation = models.CharField(max_length=255)
    email = models.EmailField(max_length=70, unique=True)
    address = models.TextField(help_text="Address of the Company.")
    target_segments = models.ManyToManyField(Segment,
                                             help_text="Choose the segments you cater to . Add more segments if "
                                                       "required using Segment API", blank=True)
    number_of_paid_customers = models.PositiveIntegerField(default=0)
    number_of_free_customers = models.PositiveIntegerField(default=0)
    funding = models.CharField(max_length=10, choices=COMPANY_FUNDING_CHOICES)
    deployment_size = models.PositiveIntegerField(default=0, help_text="Deployment size in integer")
    pitch_deck_file = models.FileField(upload_to='pitch_decks/', null=True, blank=True)
    target_industries = models.ManyToManyField(Industry,
                                               help_text="Top industries that you cater to. Add more industries if "
                                                         "required using industry API", blank=True)
    profile_image = models.ImageField(upload_to='company_profile_pics/', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Hyperlink(models.Model):
    link = models.URLField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='hyperlinks')
