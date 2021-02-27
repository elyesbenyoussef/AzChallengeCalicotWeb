import { ProductEntity } from "./product.entity";

const ELEMENT_DATA: ProductEntity[] = [
    { id: 1, name: 'Sweat', price: 49.99, description: 'Sweat à capuche enfilable - Rouge et bleu', imageSrc: '../../assets/img/products/produit1.jpg' },
    { id: 2, name: 'Chaussures blanc', price: 129.99, description: 'Chaussures Décontractées En Cuir - Blanc', imageSrc: '../../assets/img/products/produit2.png' },
    { id: 3, name: 'Chaussures noir', price: 129.99, description: 'Chaussures Décontractées En Cuir - Noir', imageSrc: '../../assets/img/products/produit3.png' },
    { id: 4, name: 'Chemise', price: 54.99, description: 'Chemise slim blanche imprimée', imageSrc: '../../assets/img/products/produit4.jpg' }
];

export abstract class MockValues {

    private static products: ProductEntity[];

    public static init(){
        MockValues.products = ELEMENT_DATA;
    }
    public static getProducts(): ProductEntity[] {
        return this.products;
    }
    public static add(product: ProductEntity) {
        this.products.push(product);
    }
}