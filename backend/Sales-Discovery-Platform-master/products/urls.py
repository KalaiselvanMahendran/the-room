from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'hyperlink', ProductHyperlinkViewset, basename='hyperlink')
router.register(r'pitchdeck', ProductPitchDeckViewset, basename='pitchdeck')
router.register(r'feature_file', ProductFeatureFileViewset, basename='feature_file')
router.register(r'keyword', KeyWordViewset, basename='keyword')
router.register(r'buyer_personal', BuyerPersonalViewset, basename='buyer_personal')
router.register(r'user_personal', UserPersonalViewset, basename='user_personal')
router.register(r'vertical', VerticalViewset, basename='vertical')
router.register(r'functional_category', FunctionalCategoryViewset, basename='functional_category')

router.register(r'', ProductViewSet)

urlpatterns = router.urls