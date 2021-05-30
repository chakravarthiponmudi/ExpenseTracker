import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { AccountTypeComponent, AccountSettingComponent } from './accountsetting'

const routes: Routes = [
  {
    path: 'settings/accountsetting',
    component: AccountSettingComponent,
    outlet: 'settings',
  },
  {
    path: 'settings/accounttype',
    component: AccountTypeComponent,
    outlet: 'settings',
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SettingRoutingModule {}
