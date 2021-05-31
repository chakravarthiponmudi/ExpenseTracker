import { Component, OnInit } from '@angular/core'
import {AccountTypeService} from '../../shared/accounttype.service'
import {AccountTypeInterface} from "./accounttype.interface";
@Component({
  templateUrl: './accounttype.component.html',
})
export class AccountTypeComponent implements OnInit {

  private accountTypes!:[AccountTypeInterface]
  constructor(private s1: AccountTypeService) {
    // Use the constructor to inject services.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
    this.s1.getAccountTypes().subscribe(data=>console.log(data));
  }

}
