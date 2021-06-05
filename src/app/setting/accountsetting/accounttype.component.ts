import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import {AccountTypeService} from '../../shared/accounttype.service'
import {AccountTypeInterface} from "./accounttype.interface";
@Component({
  templateUrl: './accounttype.component.html',
})
export class AccountType implements OnInit {

  public accountTypes!:[AccountTypeInterface]
  constructor(private s1: AccountTypeService,
    private router:RouterExtensions,) {
    // Use the constructor to inject services.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
    this.s1.getAccountTypes().subscribe(data=> {
      this.accountTypes = data.map(this.getAccountTypesFromDB);
    });
  }

  private getAccountTypesFromDB(data : any):AccountTypeInterface {
    const accountType: AccountTypeInterface = {
      id : data[0],
      name: data[1],
      accountType : data[2],
      // description : data[2],
    };
    return accountType;
  }

  public createAccount() {
    this.router.navigate([
      {
        outlets: {
          settings:['settings','accounttype','newaccount']
        }
      }
    ]).catch(err=>{
      console.log('While navigating to new account screen',err);
    })
  }

  taptest() {}

}
