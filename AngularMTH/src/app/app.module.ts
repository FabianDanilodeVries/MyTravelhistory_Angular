import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AddAccommodationComponent } from './components/add-accommodation/add-accommodation.component';
import { UserComponent } from './components/user/user.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LogInComponent } from './components/login-register/log-in/log-in.component';
import { RegisterComponent } from './components/login-register/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAccommodationComponent,
    UserComponent,
    UserVisitOverviewComponent,
    LoginRegisterComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // place services here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
