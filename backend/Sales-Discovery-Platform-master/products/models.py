from django.db import models
from users.models import Department


# Create your models here.

class FunctionalCategory(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Vertical(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class UserPersonal(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class BuyerPersonal(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class KeyWord(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    logo = models.ImageField(upload_to='product_logos/', null=True)
    functional_categories = models.ManyToManyField(FunctionalCategory)
    verticals = models.ManyToManyField(Vertical)
    teams = models.ManyToManyField(Department)
    user_personals = models.ManyToManyField(UserPersonal)
    buyer_personals = models.ManyToManyField(BuyerPersonal)
    key_words = models.ManyToManyField(KeyWord)

    def __str__(self):
        return self.name


class ProductFeatureFile(models.Model):
    file = models.FileField(upload_to='product_feature_files/')
    functional_categories = models.ManyToManyField(FunctionalCategory)
    verticals = models.ManyToManyField(Vertical)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_feature_files')

    def __str__(self):
        return str(self.file)


class ProductPitchDeck(models.Model):
    file = models.FileField(upload_to='product_pitchdeck_files/')
    functional_categories = models.ManyToManyField(FunctionalCategory)
    verticals = models.ManyToManyField(Vertical)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_pitchdeck_files')

    def __str__(self):
        return str(self.file)


class ProductHyperlink(models.Model):
    link = models.URLField(max_length=255)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_hyperlinks')
    functional_categories = models.ManyToManyField(FunctionalCategory)
    verticals = models.ManyToManyField(Vertical)

    def __str__(self):
        return str(self.link)
