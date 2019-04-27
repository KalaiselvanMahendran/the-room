"""sales_discovery URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path
from django.contrib.auth import views
from .views import home , LogoutView , LoginView ,redirect_to_frontend
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view

from rest_framework.documentation import include_docs_urls

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
	path('admin/', admin.site.urls),
	url(r'^$', home, name='home'),
	# url(r'^auth/', include('social_django.urls', namespace='social')),
    url(r'^auth/', include('rest_framework_social_oauth2.urls')),
	url(r'^login/$', LoginView.as_view(),name='login'),
	url(r'^logout/$', LogoutView.as_view(), name='logout'),
	url(r'^redirect/$', redirect_to_frontend, name='redirect'),

    url(r'^api/v1/', include('organisation.urls')),
    url(r'^api/v1/', include('users.urls')),
    url(r'^api/v1/products/', include('products.urls')),
    url(r'^api/v1/docs/', include_docs_urls(title='DRF API documentation')),
    url(r'^api/v1/swagger_docs/', schema_view),
    url(r'^api/v1/chats/', include('chats.urls')),




]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
