import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';
import { HeaderComponent } from './components/header/header.component';
import { AddRestaurantComponent } from 'src/app/components/add-restaurant/add-restaurant.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddAccommodationComponent } from 'src/app/components/add-accommodation/add-accommodation.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from 'src/app/components/login-register/log-in/log-in.component';
import { RegisterComponent } from 'src/app/components/login-register/register/register.component';
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
    LogOutButtonComponent,
    LogOutButtonComponent,
    LogInComponent,
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