from django.contrib import admin
from .models import (Company,Segment,Industry,Hyperlink)
# Register your models here.

admin.site.register(Company)
admin.site.register(Segment)
admin.site.register(Industry)
admin.site.register(Hyperlink)