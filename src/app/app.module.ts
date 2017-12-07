import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { TestComponent } from './components/test.component';
import { TnwComponent } from './components/tnw.component';
import { PeopleComponent } from './components/people.component';

import { HeroFormComponent } from './components/form/hero-form.component';
import { UserloginFormComponent } from './components/form/userlogin-form.component';
import { LoginService } from './services/login.service';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TnwComponent,
    HeroFormComponent,
    UserloginFormComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }