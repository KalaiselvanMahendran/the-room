from users.factories import *
from organisation.factories import *
from products.factories import *

from django.core.management.base import BaseCommand


def populate_db():

    Department.objects.all().delete()
    department_it = DepartmentFactory(name='IT')
    department_sotware = DepartmentFactory(name='Software')
    department_management = DepartmentFactory(name='Management')

    Segment.objects.all().delete()
    segment1 = SegmentFactory(name='Mid Market')
    segment2 = SegmentFactory(name='Enterprise')
    segment3 = SegmentFactory(name='SMB')




class Command(BaseCommand):
    def handle(self, **options):
        populate_db()
