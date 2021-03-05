import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntity } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  products: ProductEntity[] = [];
  
  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      console.log(resolveData);
      this.products = resolveData.collection.data;
    })
  }

}
