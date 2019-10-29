import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthResolverService implements Resolve<String> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return "page not found";
  }
}
