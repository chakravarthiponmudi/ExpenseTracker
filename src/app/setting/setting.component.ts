import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  templateUrl: './setting.component.html',
})
export class SettingComponent implements OnInit {
  constructor(private router:RouterExtensions, private currentRoute: ActivatedRoute) {
    // Use the constructor to inject services.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  showAccountSettings(){
    this.router.navigate([ {outlets: {settings:['settings','accountsetting']}}]).catch(err => console.log(err));
  }
}
