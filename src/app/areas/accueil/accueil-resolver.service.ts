import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { AccueilService } from "./accueil.service";

@Injectable({
    providedIn: 'root'
})

export class AccueilResolver implements Resolve<any> {
    constructor(private accueilService: AccueilService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.accueilService.GetAllProducts();
    }
}