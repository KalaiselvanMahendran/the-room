import factory
from faker import Factory
import time
from products.models import *

faker = Factory.create()

unique_word = factory.Sequence(lambda n: faker.word() + str(time.time()))


class FunctionalCategoryFactory(factory.DjangoModelFactory):
    class Meta:
        model = FunctionalCategory

    name = unique_word


class VerticalFactory(factory.DjangoModelFactory):
    class Meta:
        model = Vertical

    name = unique_word

class UserPersonalFactory(factory.DjangoModelFactory):
    class Meta:
        model = UserPersonal

    name = unique_word

class BuyerPersonalFactory(factory.DjangoModelFactory):
    class Meta:
        model = BuyerPersonal

    name = unique_word

class KeyWordFactory(factory.DjangoModelFactory):
    class Meta:
        model = KeyWord

    name = unique_word

class ProductFactory(factory.DjangoModelFactory):
    class Meta:
        model = Product

    name = faker.name()
    description = faker.word()
    logo = faker.url()

    head_quaters = faker.word()
    region_of_operation = faker.word()
    email = factory.Sequence(lambda n: 'randomemail{}@domain.com'.format(n))
    address = faker.address()
    number_of_paid_customers = 3
    number_of_free_customers = 5
    funding = 'public'
    deployment_size = 45

    @factory.post_generation
    def functional_categories(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for functional_category in extracted:
                self.functional_categories.add(functional_category)

    @factory.post_generation
    def verticals(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for vertical in extracted:
                self.verticals.add(vertical)


    @factory.post_generation
    def teams(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for team in extracted:
                self.teams.add(team)

    @factory.post_generation
    def user_personals(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for user_personal in extracted:
                self.user_personals.add(user_personal)

    @factory.post_generation
    def buyer_personals(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for buyer_personal in extracted:
                self.buyer_personals.add(buyer_personal)

    @factory.post_generation
    def key_words(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for keyword in extracted:
                self.key_words.add(keyword)


class ProductFeatureFileFactory(factory.DjangoModelFactory):
    class Meta:
        model = ProductFeatureFile

    file = faker.url()
    product = factory.SubFactory(ProductFactory)

    @factory.post_generation
    def functional_categories(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for functional_category in extracted:
                self.functional_categories.add(functional_category)

    @factory.post_generation
    def verticals(self, created, extracted,**kwargs):
        if not created:
            return
        if extracted:
            for vertical in extracted:
                self.verticals.add(vertical)


class ProductPitchDeckFactory(factory.DjangoModelFactory):
    class Meta:
        model = ProductPitchDeck

    file = faker.url()
    product = factory.SubFactory(ProductFactory)

    @factory.post_generation
    def functional_categories(self, created, extracted, **kwargs):
        if not created:
            return
        if extracted:
            for functional_category in extracted:
                self.functional_categories.add(functional_category)

    @factory.post_generation
    def verticals(self, created, extracted, **kwargs):
        if not created:
            return
        if extracted:
            for vertical in extracted:
                self.verticals.add(vertical)


class ProductHyperlinkFactory(factory.DjangoModelFactory):
    class Meta:
        model = ProductHyperlink

    link = faker.url()
    product = factory.SubFactory(ProductFactory)

    @factory.post_generation
    def functional_categories(self, created, extracted, **kwargs):
        if not created:
            return
        if extracted:
            for functional_category in extracted:
                self.functional_categories.add(functional_category)

    @factory.post_generation
    def verticals(self, created, extracted, **kwargs):
        if not created:
            return
        if extracted:
            for vertical in extracted:
                self.verticals.add(vertical)
