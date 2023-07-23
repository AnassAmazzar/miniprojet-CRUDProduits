from django.urls import path
from django import urls
from .views import ProduitDetail, ProduitList, search_product


urlpatterns = [
    path('produits/', ProduitList.as_view(), name='Produits'),
    path('produit/<int:pk>', ProduitDetail.as_view(), name='Produit'),
    path('search/', search_product, name='search_products')
    # <str:q>/
]
