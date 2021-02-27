import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockValues } from 'src/app/entities/mock.entity';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouted.data.subscribe((resolveData: any) => {
      console.log(resolveData);
      MockValues.initall(resolveData.collection);
    })
  }

}
