import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';
import { RegisterComponent } from './components/login-register/register/register.component';
import { LogInComponent } from './components/login-register/log-in/log-in.component';
import { HeaderComponent } from './components/header/header.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { AddAccommodationComponent } from './components/add-accommodation/add-accommodation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LogOutButtonComponent } from './components/header/log-out-button/log-out-button.component';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAccommodationComponent,
    UserVisitOverviewComponent,
    LogInComponent,
    RegisterComponent,
    AddRestaurantComponent,
    LoginRegisterComponent,
    LogOutButtonComponent,
    LogOutButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
