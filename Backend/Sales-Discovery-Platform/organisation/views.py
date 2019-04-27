from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Company, Hyperlink, Segment, Industry
from .serializers import CompanySerializer, SegmentSerializer, HyperlinkSerializer, IndustrySerializer


class CompanyViewSet(viewsets.ModelViewSet):
    """
	list:
	Return existing Companies

	create:
	Create a Company.                  
	Note that Hyperlinks data related to the company are created using the API at /api/v1/hyperlink/
			This should be done after the company creation. Once the company is created, the primary 
			key of the company is used while creating hyperlinks. Refer to docs for that API.

	"""

    serializer_class = CompanySerializer
    queryset = Company.objects.all()

    def perform_create(self, serializer):
        domain = self.request.user.email.split('@')[1]
        serializer.save(domain=domain)


class HyperlinkViewSet(viewsets.ModelViewSet):
    """
	create:
	A hyperlink should be created only after creating the related company. The API requires you to provide
	the company id along with the hyperlink.
    """
    serializer_class = HyperlinkSerializer
    queryset = Hyperlink.objects.all()


class SegmentViewSet(viewsets.ModelViewSet):
    """
	create: 
	Used to create a new Segment that the company would like to cater to.
	"""
    serializer_class = SegmentSerializer
    queryset = Segment.objects.all()


class IndustryViewSet(viewsets.ModelViewSet):
    """
	create: 
	Used to create a new Industry that the company would like to cater to.
	"""
    serializer_class = IndustrySerializer
    queryset = Industry.objects.all()
