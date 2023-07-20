import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  produit:any
  data:any
  constructor(private produitsService: ProduitsService, private route : ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.produitsService.getProduitByID(id).subscribe(data=>{
      this.produit = data
      console.log(data)
    })
  }

  form = new FormGroup({
    nom : new FormControl('', Validators.required),
    prix : new FormControl('', Validators.required),
    quantiter : new FormControl('', Validators.required),
  })

  submit(){
    this.data = this.form.value
    this.produit.nom = this.data.nom
    this.produit.prix = this.data.prix
    this.produit.quantite = this.data.quantite
    console.log(this.data)

    this.produitsService.updateUser(this.produit?.id, this.produit).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(['/'])
  }
}
