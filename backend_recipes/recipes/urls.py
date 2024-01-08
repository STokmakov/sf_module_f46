from rest_framework import routers
from django.urls import path, include
from .views import Categories_view, Recipe_view, recipes_view

from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView


router = routers.DefaultRouter()
router.register('categories', Categories_view)
router.register('recipe', Recipe_view)



urlpatterns = [
    path('api/', include(router.urls)),
    path('api/recipes/', recipes_view),
    path('schema/', get_schema_view(
        title='API Schema',
        description='Guide for the REST API'
    ), name='schema'),
    path('swagger/', TemplateView.as_view(
        template_name='swagger.html',
        extra_context={'schema_url': 'schema'}
    ), name='swagger'),
]