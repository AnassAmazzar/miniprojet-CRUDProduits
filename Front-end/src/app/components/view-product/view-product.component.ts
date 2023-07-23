import { Produit } from './../../Interface/Produit';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  produits : Produit[] | undefined;
  products: Produit[] | undefined;
  dataproduit: any


  constructor(private produitsService:ProduitsService){}
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.produitsService.getProduits().subscribe(data=>{
      this.produits = data
      console.log(data)
    })
  }

  deleteProduit(id:number){
    this.produitsService.deleteuserById(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit() //refresh it
    })
  }

  searchProducts() {
    this.dataproduit = this.form.value
    console.log(this.dataproduit.nom);
    this.produitsService.searchProducts(this.dataproduit.nom).subscribe(data => {
      this.produits = data;
      // console.log(this.products);
    });
  }

}
