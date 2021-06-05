import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule} from '@nativescript/angular'
import { SettingComponent } from './setting.component'
import {AccountSettingComponent, AccountType, NewAccountType} from './accountsetting';
import {SettingRoutingModule} from './setting-routing.module';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';
@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SettingRoutingModule,
    TNSCheckBoxModule
  ],
  declarations: [SettingComponent, AccountSettingComponent, AccountType,
    NewAccountType
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingModule {}
