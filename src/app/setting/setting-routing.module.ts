import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { AccountType, AccountSettingComponent, NewAccountType } from './accountsetting'

const routes: Routes = [
  {
    path: 'settings/accountsetting',
    component: AccountSettingComponent,
    outlet: 'settings',
  },
  {
    path: 'settings/accounttype',
    component: AccountType,
    outlet: 'settings',
  },
  {
    path: 'settings/accounttype/newaccount',
    component: NewAccountType,
    outlet: 'settings',
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SettingRoutingModule {}
