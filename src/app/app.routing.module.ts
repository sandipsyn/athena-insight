import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { TaggedResultComponent } from './components/tagged-result/tagged-result.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent
  },
  {
    path: 'result',
    component: TaggedResultComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
