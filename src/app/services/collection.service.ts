import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ProductEntity } from "../entities/product.entity";
import { HttpClientService } from "./http-client.service";

@Injectable({
    providedIn: 'root'
})

export class CollectionService {
    CollectionURL = environment.ApiUrl + 'api/collection';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        })
    };

    constructor(private http: HttpClientService) { }

    GetAllProducts() {
        const url = environment.ApiUrl + 'api/collection/all';
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }

    AddProduct(product: ProductEntity) {
        return this.http.post(this.CollectionURL, product);
    }

    DeleteProduct(product: ProductEntity) {
        return this.http.delete(this.CollectionURL, product);
    }

}