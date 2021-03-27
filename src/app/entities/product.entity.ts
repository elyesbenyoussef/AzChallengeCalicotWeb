import { ImageEntity } from "./image.entity";

export class ProductEntity {
  constructor() {
    this.images =  [];
  }
    produitId: number;
    nom: string;
    description: string;
    prix: number;
    imageSrc?: string;
    indActive: boolean;
    images: ImageEntity[];
  }