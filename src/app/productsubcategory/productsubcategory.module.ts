import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsubcategoryRoutingModule } from './productsubcategory-routing.module';
import { ProductsubcategoryComponent } from './productsubcategory.component';


@NgModule({
  declarations: [ProductsubcategoryComponent],
  imports: [
    CommonModule,
    ProductsubcategoryRoutingModule
  ]
})
export class ProductsubcategoryModule { }
