import { Component, OnInit } from '@angular/core'

import { DataService, DataItem } from '../shared/data.service'

@Component({
  // selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  inputText: string;
  constructor(private _itemService: DataService) {}

  ngOnInit(): void {
  }

  onTap(): void {
    console.log(this.inputText);
  }
}
