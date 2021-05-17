import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import {HomeComponent} from './home/home.component';
import {BrowseComponent} from './browse/browse.component';
import {SearchComponent} from './search/search.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: "/(home:home//browse:browse//search:search)",
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: "home",
  },
  {
    path: 'browse',
    component: BrowseComponent,
    outlet: "browse",
  },
  {
    path: 'search',
    component: SearchComponent,
    outlet: 'search',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
