import factory

from users.models import User, Department, RoleInCompany, UserProfile, TemporaryUserProfile


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Sequence(lambda n: 'username{0}'.format(n))
    first_name = factory.Sequence(lambda n: 'firstname{0}'.format(n))
    last_name = factory.Sequence(lambda n: 'lastname{0}'.format(n))
    email = factory.Sequence(lambda n: 'xyz{0}@company{0}.com'.format(n))


class DepartmentFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Department

    name = factory.Iterator(['Software', 'Sales', 'Marketing', 'HR'])


class RoleInCompanyFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = RoleInCompany
    position = factory.Iterator(['SDE', 'Sales', 'Marketing', 'Senior HR'])




