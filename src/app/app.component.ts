import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  style = 'font-size:32px;color:black'
  homeIcon = '&#xe900;';

  ngOnInit(): void {
    // Init your component properties here.
  }

  onTap(componentName : string): void {
    this.style='font-size:32px;color:red';
    console.log(componentName);
  }
}
