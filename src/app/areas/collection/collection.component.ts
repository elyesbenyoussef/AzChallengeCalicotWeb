import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntity } from 'src/app/entities/product.entity';
import { ProductService } from 'src/app/services/product.service';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  title: string;
  content: string;
  price: number;
  src: string;
  id: number;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.less']
})
export class CollectionComponent implements OnInit {

  desired_columns = 4;
  desired_rowHeight = "28rem";

  tiles: Tile[] = [];

  products: ProductEntity[] = [];

  constructor(private activeRouted: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      console.log(resolveData);
      this.products = resolveData.collection.data;
      this.Init();
    })
  }

  Init(): void {
    if (this.products) {
      Array.from(this.products).forEach(element => {
        var imageSrc = '';
        if (element.images && element.images.length > 0) {
          element.images[0].urlThumb = this.productService.GetUrlThumb(element.images[0].url);
          imageSrc = element.images[0].urlThumb;
        } else {
          imageSrc = element.imageSrc;
        }

        let tile: Tile = {
          title: element.nom,
          price: element.prix,
          content: element.description,
          src: imageSrc,
          id: element.produitId,
          cols: 1,
          rows: 1,
        }

        this.tiles.push(tile);
      });
    }
  }

  renitialiser() { }

}
