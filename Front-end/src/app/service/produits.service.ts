import { Produit } from '../Interface/Produit';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private url: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

  //AjouterProduit
  addProduit(produit: Produit): Observable<Produit>{
    return this.http.post<Produit>(`${this.url}produits/`, produit);
  }

  //getProduits
  getProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.url}produits/`)
  }

  //getProduitByID - url+user/:id
  getProduitByID(id: number):Observable<Produit> {
    return this.http.get<Produit>(`${this.url}produit/${id}`)
  }

  //updateProduit - url+produit/:id
  updateUser(id: number, produit: Produit):Observable<Produit> {
    return this.http.put<Produit>(`${this.url}produit/${id}`, produit)
  }

  //deleteproduitById - url+produit/:id
  deleteuserById(id: number):Observable<Produit> {
    return this.http.delete<Produit>(`${this.url}produit/${id}`)
  }

  // checher-Produit
  // searchProducts(query:string): Observable<Produit[]> {
  //   return this.http.get<Produit[]>(`${this.url}search/${query}`);
  // }
  searchProducts(searchTerm: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.url}search/?q=${searchTerm}`);
  }
}
