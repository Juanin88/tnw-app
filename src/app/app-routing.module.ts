import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './components/test.component';
import { TnwComponent } from './components/tnw.component';
import { PeopleComponent } from './components/people.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'tnw', component: TnwComponent },
  { path: 'people', component: PeopleComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
  
export class AppRoutingModule {}
