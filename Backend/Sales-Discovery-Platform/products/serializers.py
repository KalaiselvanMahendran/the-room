from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,

    )

from .models import *

class FunctionalCategorySerializer(ModelSerializer):
    class Meta:
        model = FunctionalCategory
        fields = [
            'id',
            'name',
        ]

class VerticalSerializer(ModelSerializer):
    class Meta:
        model = Vertical
        fields = [
            'id',
            'name',
        ]

class UserPersonalSerializer(ModelSerializer):
    class Meta:
        model = UserPersonal
        fields = [
            'id',
            'name',
        ]

class BuyerPersonalSerializer(ModelSerializer):
    class Meta:
        model = BuyerPersonal
        fields = [
            'id',
            'name',
        ]



class KeyWordSerializer(ModelSerializer):
    class Meta:
        model = KeyWord
        fields = [
            'id',
            'name',
        ]

class ProductFeatureFileSerializer(ModelSerializer):
    class Meta:
        model = ProductFeatureFile
        fields = '__all__'

class ProductPitchDeckSerializer(ModelSerializer):
    class Meta:
        model = ProductPitchDeck
        fields = '__all__'

class ProductHyperlinkSerializer(ModelSerializer):
    class Meta:
        model = ProductHyperlink
        fields = '__all__'



class ProductSerializer(ModelSerializer):
    feature_files = SerializerMethodField(read_only=True)
    pitch_deck_files = SerializerMethodField(read_only=True)
    hyperlinks = SerializerMethodField(read_only=True)
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'description',
            'logo',
            'functional_categories',
            'verticals',
            'teams',
            'user_personals',
            'buyer_personals',
            'key_words',
            'pitch_deck_files',
            'feature_files',
            'hyperlinks',


        ]

    def get_hyperlinks(self,obj):
        return [h.link for h in ProductHyperlink.objects.filter(product=obj)]

    def get_pitch_deck_files(self,obj):
        return [f.file for f in ProductPitchDeck.objects.filter(product=obj)]

    def get_feature_files(self,obj):
        return [f.file for f in ProductFeatureFile.objects.filter(product=obj)]

