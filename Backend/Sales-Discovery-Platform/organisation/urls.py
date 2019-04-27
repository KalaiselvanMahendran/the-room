from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, HyperlinkViewSet, IndustryViewSet, SegmentViewSet

router = DefaultRouter()
router.register(r'company', CompanyViewSet, basename='company')
router.register(r'hyperlink', HyperlinkViewSet, basename='hyperlink')
router.register(r'industry', IndustryViewSet, basename='industry')
router.register(r'segment', SegmentViewSet, basename='segment')

urlpatterns = router.urls
