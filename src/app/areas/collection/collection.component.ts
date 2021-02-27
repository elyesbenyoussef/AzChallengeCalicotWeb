import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    MockValues.getProducts().forEach(element => {
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

  renitialiser() { }

}
