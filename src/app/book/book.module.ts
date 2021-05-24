import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BookRoutingModule } from './book-routing.module'
import { BookComponent } from './book.component'


@NgModule({
  imports: [NativeScriptCommonModule, BookRoutingModule],
  declarations: [BookComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BookModule {}
