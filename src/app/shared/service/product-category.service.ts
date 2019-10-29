import { Injectable } from "@angular/core";
import { RestService } from "@app/core/services/rest.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductCategoryService {
  constructor(private restService: RestService) {}

  fetchProductCategoryData(productcategoryName: string): Observable<any> {
    return this.restService.get("http://localhost:3000/productcategory/1");
  }

  fetchAllProductCategories(): Observable<any> {
    return this.restService.get("http://localhost:3000/fetchallproductcategories");
  }
}
