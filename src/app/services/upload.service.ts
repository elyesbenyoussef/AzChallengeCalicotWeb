import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UploadService {

    baseUrl = environment.ApiUrl;

    constructor(private http: HttpClient) { }

    upload(formData: FormData) {
        return this.http.post<{ path: string }>(
            this.baseUrl + 'api/upload',
            formData
        );
    }
}