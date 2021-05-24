import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { StatsRoutingModule } from './stats-routing.module'
import { StatsComponent } from './stats.component'

@NgModule({
  imports: [NativeScriptCommonModule, StatsRoutingModule],
  declarations: [StatsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StatsModule {}
