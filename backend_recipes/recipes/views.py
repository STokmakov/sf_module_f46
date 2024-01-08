from recipes.models import Recipe, Category
from .serializers import CategoriesSerializer, RecipesSerializer
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import api_view


class Recipe_view(ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer


class Categories_view(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer


@api_view(['GET'])
def recipes_view(request):
    if request.method == 'GET':
        res = Recipe.objects.filter(categoryType=request.query_params['category'])
        serializer = RecipesSerializer(res, many=True)
        return Response(serializer.data)
