import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AddAccommodationComponent } from './components/add-accommodation/add-accommodation.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LogInComponent } from './components/login-register/log-in/log-in.component';
import { RegisterComponent } from './components/login-register/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LogOutButtonComponent } from './components/header/log-out-button/log-out-button.component';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAccommodationComponent,
    AddRestaurantComponent,
    UserVisitOverviewComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    LoginRegisterComponent,
    LogOutButtonComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
