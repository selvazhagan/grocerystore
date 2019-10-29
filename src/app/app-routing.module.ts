import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { AuthGuardService } from "./core/services/auth-guard.service";
import { AuthResolverService } from "./core/services/auth-resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "product/productcategory", pathMatch: "full" },
  {
    path: "account",
    loadChildren: () =>
      import("../app/account/account.module").then(
        accountModule => accountModule.AccountModule
      )
  },
  {
    path: "product",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./product/product.module").then(
        productModule => productModule.ProductModule
      )
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    resolve: { message: AuthResolverService }
    //data: { message: "Page not found" }
  },
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
