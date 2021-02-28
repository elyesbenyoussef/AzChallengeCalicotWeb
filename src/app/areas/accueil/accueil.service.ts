import { Injectable } from "@angular/core";
import { ProductEntity } from "src/app/entities/product.entity";
import { HttpClientService } from "src/app/services/http-client.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AccueilService {
    constructor(private http: HttpClientService) {

    }

    GetAllProducts() {
        return this.http.get(environment.ApiUrl + 'api/collection/all');
    }

    AddProduct(product: ProductEntity) {
        return this.http.post(environment.ApiUrl + 'api/collection', product);
    }
}