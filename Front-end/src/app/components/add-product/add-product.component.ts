import { Produit } from './../../Interface/Produit';
import { Component } from '@angular/core';
import { ProduitsService } from './../../service/produits.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private produitsService:ProduitsService, private router: Router){}

  data: Produit | any
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
    quantite: new FormControl('', Validators.required),
  })



  /*Ajouter Produit*/
  addProduit(){
    this.data = this.form.value
    this.produitsService.addProduit(this.data).subscribe(data=>{
      this.router.navigate(['/']) //redirect to homepage
    })
  }
}
