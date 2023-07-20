import { Produit } from './../../Interface/Produit';
import { Component } from '@angular/core';
// import Produit  from 'src/app/Interface/Produit';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  produits : Produit[] | undefined;
  products: any[] = [];
  searchQuery: string='';
  filteredProducts: any[] = [];
  constructor(private produitsService:ProduitsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.produitsService.getProduits().subscribe(data=>{
      this.produits = data
      console.log(data)
    })

    this.produitsService.getProduct(this.searchQuery).subscribe(
      (data: any[]) => {
        this.produits = data;
        // this.filteredProducts = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  deleteProduit(id:number){
    this.produitsService.deleteuserById(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit() //refresh it
    })
  }

  onSearch() {
    this.filteredProducts = this.products.filter(product => {
      return product.nom.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

}
