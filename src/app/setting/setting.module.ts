import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { SettingComponent } from './setting.component'
import {AccountSettingComponent} from './accountsetting/accountsetting.component';
import {SettingRoutingModule} from './setting-routing.module'
@NgModule({
  imports: [
    NativeScriptCommonModule,
    SettingRoutingModule
  ],
  declarations: [SettingComponent, AccountSettingComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingModule {}
