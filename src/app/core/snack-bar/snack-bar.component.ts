import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.less']
})
export class SnackBarComponent implements OnInit {

  public message : string;

  constructor() { }

  ngOnInit(): void {
  }

}
