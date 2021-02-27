import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductEntity } from "src/app/entities/product.entity";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AccueilService {
    constructor(private http: HttpClient) {

    }

    GetAllProducts() {
        return this.http.get(environment.ApiUrl + 'api/collection/all', { responseType: 'text' });
    }

    AddProduct(product: ProductEntity) {
        return this.http.post(environment.ApiUrl + 'api/collection', product, { responseType: 'text' });
    }
}