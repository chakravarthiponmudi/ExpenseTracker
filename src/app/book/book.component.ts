import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'Book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {

  inputText: string;
  constructor() {}

  ngOnInit(): void {
  }

  onTap(): void {
    console.log(this.inputText);
  }
}
