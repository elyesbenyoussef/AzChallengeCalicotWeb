import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    GetUrlThumb(url: string): string {
        var indices: number[] = [];
        for (var i = 0; i < url.length; i++) {
            if (url[i] === "/") {
                indices.push(i + 1);
            }
        }

        const index = indices.pop();
        const urlThumb = url.slice(0, index) + "thumb/" + url.slice(index);

        return urlThumb;
    }
}