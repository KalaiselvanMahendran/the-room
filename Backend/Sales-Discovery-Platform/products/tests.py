from django.test import TestCase , Client , RequestFactory

from .models import Product
# Create your tests here.


class ProductModelTestCase(TestCase):

	@classmethod
	def setUpTestData(cls):
		cls.product = Product.objects.create()
		

		cls.factory = RequestFactory()

	def setUp(self):
		self.product.refresh_from_db()
		
	def test_sample(self):
		pass