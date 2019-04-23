from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *


# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    """
	list:
	Return existing Products

	create:
	Create a Product.                  

	"""

    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = [IsAuthenticated]


class ProductHyperlinkViewset(viewsets.ModelViewSet):
    serializer_class = ProductHyperlinkSerializer
    queryset = ProductHyperlink.objects.all()
    permission_classes = [IsAuthenticated]


class ProductPitchDeckViewset(viewsets.ModelViewSet):
    serializer_class = ProductPitchDeckSerializer
    queryset = ProductPitchDeck.objects.all()
    permission_classes = [IsAuthenticated]


class ProductFeatureFileViewset(viewsets.ModelViewSet):
    serializer_class = ProductFeatureFileSerializer
    queryset = ProductFeatureFile.objects.all()
    permission_classes = [IsAuthenticated]


class KeyWordViewset(viewsets.ModelViewSet):
    serializer_class = KeyWordSerializer
    queryset = KeyWord.objects.all()
    permission_classes = [IsAuthenticated]


class BuyerPersonalViewset(viewsets.ModelViewSet):
    serializer_class = BuyerPersonalSerializer
    queryset = BuyerPersonal.objects.all()
    permission_classes = [IsAuthenticated]


class UserPersonalViewset(viewsets.ModelViewSet):
    serializer_class = UserPersonalSerializer
    queryset = UserPersonal.objects.all()
    permission_classes = [IsAuthenticated]


class VerticalViewset(viewsets.ModelViewSet):
    serializer_class = VerticalSerializer
    queryset = Vertical.objects.all()
    permission_classes = [IsAuthenticated]


class FunctionalCategoryViewset(viewsets.ModelViewSet):
    serializer_class = FunctionalCategorySerializer
    queryset = FunctionalCategory.objects.all()
    permission_classes = [IsAuthenticated]
