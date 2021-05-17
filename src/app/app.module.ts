import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";


import { AppRoutingModule } from './app-routing.module'
import {HomeModule} from './home/home.module'
import { AppComponent } from './app.component'
import {BrowseModule} from './browse/browse.module'
import {SearchModule} from './search/search.module'
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptMaterialBottomNavigationModule,
    NativeScriptModule,
    AppRoutingModule,
    HomeModule,
    BrowseModule,
    SearchModule,
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
