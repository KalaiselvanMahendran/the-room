from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,

)

from .models import Company, Segment, Hyperlink, Industry


class HyperlinkSerializer(ModelSerializer):
    class Meta:
        model = Hyperlink
        fields = [
            'id',
            'link',
            'company'
        ]


class SegmentSerializer(ModelSerializer):
    class Meta:
        model = Segment
        fields = [
            'id',
            'name',
        ]


class IndustrySerializer(ModelSerializer):
    class Meta:
        model = Industry
        fields = [
            'id',
            'name',
        ]


class CompanySerializer(ModelSerializer):
    hyperlinks = SerializerMethodField()

    class Meta:
        model = Company
        fields = [
            'id',
            'name',
            'domain',
            'profile_image',
            'phone_number',
            'head_quaters',
            'region_of_operation',
            'email',
            'address',
            'target_segments',
            'number_of_paid_customers',
            'number_of_free_customers',
            'deployment_size',
            'funding',
            'pitch_deck_file',
            'hyperlinks',
            'target_industries',
            'created_at',
            'updated_at',
        ]

    def get_hyperlinks(self, obj):
        return [h.link for h in Hyperlink.objects.filter(company=obj)]
