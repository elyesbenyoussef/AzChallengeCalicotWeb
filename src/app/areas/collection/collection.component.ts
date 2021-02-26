import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  title: string;
  subtitle: string;
  content: string;
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
  
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue', title: 'Sweat', subtitle: 'sous titre 1', content: 'Sweat à capuche enfilable - Rouge et bleu', src:'../../assets/img/products/produit1.jpg'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen', title: 'Chaussure', subtitle: 'sous titre 2', content: 'Chaussures Décontractées En Cuir - Blanc', src:'../../assets/img/products/produit2.png'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', title: 'Chaussure', subtitle: 'sous titre 3', content: 'Chaussures Décontractées En Cuir - Noir', src:'../../assets/img/products/produit3.png'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', title: 'Chemise', subtitle: 'sous titre 4', content: 'Chemise slim blanche imprimée', src:'../../assets/img/products/produit4.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterInit() { }

  renitialiser() { }

}
