import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { CollectionService } from "src/app/services/collection.service";

@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements Resolve<any> {
    constructor(private collectionService: CollectionService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        if (route.queryParams.produitId) {
            return this.collectionService.GetProductDetail(route.queryParams.produitId);
        }
    }
}