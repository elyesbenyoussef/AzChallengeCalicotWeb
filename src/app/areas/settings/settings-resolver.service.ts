import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { CollectionService } from "src/app/services/collection.service";

@Injectable({
    providedIn: 'root'
})

export class SettingsResolver implements Resolve<any> {
    constructor(private collectionService: CollectionService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.collectionService.GetAllProducts();
    }
}