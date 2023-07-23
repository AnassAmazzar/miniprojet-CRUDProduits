from django.shortcuts import render
from rest_framework import generics
from .models import Produit
from .serializer import ProduitSerializer
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.http import require_GET
from rest_framework.views import APIView
from django.db.models import Q
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

def search_product(request):
    # print("terme : ", request.GET['q'])
    if 'q' in request.GET:
        nom = request.GET['q']
        print("terme : ", request.GET['q'])
        produit = Produit.objects.filter(Q(nom__icontains=nom))
        data = [{'nom': prod.nom, 'prix': prod.prix,
                 'quantite': prod.quantite} for prod in produit]
        return JsonResponse(data, safe=False)
    else:
        return JsonResponse([], safe=False)
