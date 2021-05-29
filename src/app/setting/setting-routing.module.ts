import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { AccountSettingComponent } from './accountsetting/accountsetting.component'

const routes: Routes = [
  {
    path: 'accountsetting',
    component: AccountSettingComponent,
    outlet: 'settings',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SettingRoutingModule {}
