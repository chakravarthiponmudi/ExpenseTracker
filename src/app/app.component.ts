import { Component, OnInit } from '@angular/core'
import { SelectedIndexChangedEventData } from '@nativescript-community/ui-material-bottom-navigation';



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
  onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
    console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
  }

  onTap(componentName : string): void {
    this.style='font-size:32px;color:red';
    console.log(componentName);
  }
}
