import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../../shared/service/logging.service";
import { ProductCategoryService } from "@app/shared/service/product-category.service";

@Component({
  selector: "app-productcategory",
  templateUrl: "./productcategory.component.html",
  styleUrls: ["./productcategory.component.scss"],
  providers: [LoggingService]
})
export class ProductcategoryComponent implements OnInit {
  categories: any;
  constructor(
    private loggingService: LoggingService,
    private productCategoryService: ProductCategoryService
  ) {}

  ngOnInit() {
    this.productCategoryService
      .fetchAllProductCategories()
      .subscribe(responseData => {
        this.categories = responseData.Items;
        console.log(this.categories);
      });
  }

  selectCategory(categoryName: string) {
    this.loggingService.logToConsole(categoryName);
    const productCategoryInfo = this.productCategoryService
      .fetchProductCategoryData(categoryName)
      .subscribe(responseData => {
        console.log(responseData.Item.productCategoryInfo);
      });
  }

  trackbyCategoryFu(index, category) {
    console.log(category.productCategoryInfo.id);
    return category.productCategoryInfo.id;
  }
}
