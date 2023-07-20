from django.urls import path
from django import urls
from .views import ProduitDetail, ProduitList, search_products


urlpatterns = [
    path('produits/', ProduitList.as_view(), name='Produits'),
    path('produit/<int:pk>', ProduitDetail.as_view(), name='Produit'),
    path('search/', search_products, name='search_products')
]
