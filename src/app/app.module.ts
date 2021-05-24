import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";


import { AppRoutingModule } from './app-routing.module'
import {BookModule} from './book/book.module'
import {AppComponent } from './app.component'
import {StatsModule} from './stats/stats.module'
import {AccountModule} from './account/account.module'
import {SettingModule} from './setting/setting.module';
@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptMaterialBottomNavigationModule,
    NativeScriptModule,
    AppRoutingModule,
    BookModule,
    StatsModule,
    AccountModule,
    SettingModule
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
