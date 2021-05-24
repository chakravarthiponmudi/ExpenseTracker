import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SettingRoutingModule } from './setting-routing.module'
import { SettingComponent } from './setting.component'

@NgModule({
  imports: [NativeScriptCommonModule, SettingRoutingModule],
  declarations: [SettingComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingModule {}
