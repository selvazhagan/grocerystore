import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-subcategory',
  templateUrl: './product-subcategory.component.html',
  styleUrls: ['./product-subcategory.component.scss']
})
export class ProductSubcategoryComponent implements OnInit, OnDestroy{

  productSubCategoryId : string;
  paramSubscription : Subscription
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.productSubCategoryId = this.route.snapshot.params['id'];
    this.paramSubscription = this.route.params.subscribe((params:Params) =>  {
      this.productSubCategoryId = params['id'];
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
