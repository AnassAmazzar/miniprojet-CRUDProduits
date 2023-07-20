from django.shortcuts import render
from rest_framework import generics
from .models import Produit
from .serializer import ProduitSerializer
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.http import require_GET
# Create your views here.

# -1


class ProduitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

# -2


class ProduitList(generics.ListCreateAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer


# -3 chercher

@require_GET
def search_products(request):
    query = request.GET.get('query', '')
    products = Product.objects.filter(name__icontains=query)
    serialized_products = [
        {'id': p.id, 'name': p.name, 'price': p.price} for p in products]
    return JsonResponse(serialized_products, safe=False)
