from django.db import models

# Create your models here.

# Model Produit


class Produit(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=255)
    prix = models.CharField(max_length=255)
    quantite = models.CharField(max_length=255)


def __str__(self):
    return self.name
