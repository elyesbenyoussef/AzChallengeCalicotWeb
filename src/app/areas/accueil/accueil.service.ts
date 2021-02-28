import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductEntity } from "src/app/entities/product.entity";
import { HttpClientService } from "src/app/services/http-client.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AccueilService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        })
    };

    constructor(private http: HttpClientService) {

    }

    GetAllProducts() {
        return this.http.get(environment.ApiUrl + 'api/collection/all', this.httpOptions);
    }

    AddProduct(product: ProductEntity) {
        return this.http.post(environment.ApiUrl + 'api/collection', product);
    }
}