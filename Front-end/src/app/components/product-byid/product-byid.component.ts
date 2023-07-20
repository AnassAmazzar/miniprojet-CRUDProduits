import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from 'src/app/service/produits.service';

@Component({
  selector: 'app-product-byid',
  templateUrl: './product-byid.component.html',
  styleUrls: ['./product-byid.component.css']
})
export class ProductByidComponent {
  produit:any
  data:any
  constructor(private produitsService: ProduitsService, private route : ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.produitsService.getProduitByID(id).subscribe(data=>{
      this.produit = data
    })
  }
}
