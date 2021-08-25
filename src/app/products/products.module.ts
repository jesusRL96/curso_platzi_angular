import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
