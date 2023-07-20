import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductByidComponent } from './components/product-byid/product-byid.component';

const routes: Routes = [
  {path: '', component: ViewProductComponent},
  {path: 'ajouter', component: AddProductComponent},
  {path: 'modifier/:id', component: UpdateProductComponent},
  {path: 'produit/:id', component: ProductByidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
