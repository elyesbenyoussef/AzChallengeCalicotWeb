import { ProductEntity } from "./product.entity";

export class ImageEntity {

    constructor(produitId: number, url: string, nom: string) {
        this.produitId = produitId;
        this.url = url;
        this.nom = nom;
    }
    imageId: number;
    produitId: number;
    nom: string;
    url: string;
    urlThumb: string;
    produit: ProductEntity;
}