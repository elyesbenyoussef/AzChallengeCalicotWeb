import { HttpHeaders } from "@angular/common/http";
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
}