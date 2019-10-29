import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductcategoryComponent } from './product-category/productcategory.component';
import { ProductSubcategoryComponent } from './product-subcategory/product-subcategory.component';


@NgModule({
  declarations: [ProductcategoryComponent, ProductSubcategoryComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
