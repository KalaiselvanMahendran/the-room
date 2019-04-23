import factory
from faker import Factory
import time
from organisation.models import *

faker = Factory.create()

unique_word = factory.Sequence(lambda n: faker.word() + str(time.time()))


class IndustryFactory(factory.DjangoModelFactory):
    class Meta:
        model = Industry

    name = unique_word


class SegmentFactory(factory.DjangoModelFactory):
    class Meta:
        model = Segment

    name = unique_word


class CompanyFactory(factory.DjangoModelFactory):
    class Meta:
        model = Company

    name = faker.name()
    domain = faker.word()
    phone_number = '+918281785466'
    head_quaters = faker.word()
    region_of_operation = faker.word()
    email = factory.Sequence(lambda n: 'randomemail{}@domain.com'.format(n))
    address = faker.address()
    number_of_paid_customers = 3
    number_of_free_customers = 5
    funding = 'public'
    deployment_size = 45

    @factory.post_generation
    def target_segments(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for target_segment in extracted:
                self.target_segments.add(target_segment)

    @factory.post_generation
    def target_industries(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for target_industry in extracted:
                self.target_industries.add(target_industry)


class HyperlinkFactory(factory.DjangoModelFactory):
    class Meta:
        model = Hyperlink

    link = faker.name()
    company = factory.SubFactory(CompanyFactory)
