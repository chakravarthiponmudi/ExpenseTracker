import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import {BookComponent} from './book/book.component';
import {StatsComponent} from './stats/stats.component';
import {AccountComponent} from './account/account.component';
import {SettingComponent} from './setting/setting.component';
import { AccountSettingComponent } from './setting/accountsetting/accountsetting.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/(book:book//stats:stats//accounts:accounts//settings:settings)",
    pathMatch: 'full',
  },
  {
    path: 'book',
    component: BookComponent,
    outlet: "book",
  },
  {
    path: 'stats',
    component: StatsComponent,
    outlet: "stats",
  },
  {
    path: 'accounts',
    component: AccountComponent,
    outlet: 'accounts',
  },
  {
    path: 'settings',
    component: SettingComponent,
    outlet: 'settings',
  },
  // {
  //   path: 'settings/accountsetting',
  //   component: AccountSettingComponent,
  //   outlet: 'settings',
  // }
]


@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
