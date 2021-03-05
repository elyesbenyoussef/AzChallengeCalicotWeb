import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { CollectionService } from "src/app/services/collection.service";
import { AccueilService } from "./accueil.service";

@Injectable({
    providedIn: 'root'
})

export class AccueilResolver implements Resolve<any> {
    constructor(private collectionService: CollectionService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.collectionService.GetAllProducts();
    }
}