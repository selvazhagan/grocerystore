import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductcategoryComponent } from './product-category/productcategory.component';
import { ProductSubcategoryComponent } from './product-subcategory/product-subcategory.component';

const routes: Routes = [
  { path: 'productcategory', component: ProductcategoryComponent },
  { path: 'productsubcategory/:id', component: ProductSubcategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
