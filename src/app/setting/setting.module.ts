import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { SettingComponent } from './setting.component'
import {AccountSettingComponent, AccountTypeComponent} from './accountsetting';
import {SettingRoutingModule} from './setting-routing.module'
@NgModule({
  imports: [
    NativeScriptCommonModule,
    SettingRoutingModule
  ],
  declarations: [SettingComponent, AccountSettingComponent, AccountTypeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingModule {}
