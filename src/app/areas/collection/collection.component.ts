import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockValues } from 'src/app/entities/mock.entity';

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  title: string;
  content: string;
  price: number;
  src: string;
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

  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      console.log(resolveData);
      MockValues.initall(resolveData.collection);
      this.Init();
    })
  }

  Init(): void {
    const products = MockValues.getProducts();
    if (products) {
      Array.from(products).forEach(element => {
        let tile: Tile = {
          title: element.name,
          price: element.price,
          content: element.description,
          src: element.imageSrc,
          cols: 1,
          rows: 1,
        }

        this.tiles.push(tile);
      });
    }
  }

  renitialiser() { }

}
