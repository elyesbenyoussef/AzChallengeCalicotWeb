import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockValues } from 'src/app/entities/mock.entity';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      console.log(resolveData);
      MockValues.initall(resolveData.collection);
    })
  }

}
