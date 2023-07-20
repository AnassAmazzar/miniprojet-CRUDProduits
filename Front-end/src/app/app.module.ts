import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HeaderViewComponent } from './components/header-view/header-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductByidComponent } from './components/product-byid/product-byid.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductComponent,
    AddProductComponent,
    HeaderViewComponent,
    UpdateProductComponent,
    ProductByidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
