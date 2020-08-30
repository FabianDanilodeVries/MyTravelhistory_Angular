import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { AddAccommodationComponent } from './components/add-accommodation/add-accommodation.component';
import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [

{path: "", component: LoginRegisterComponent},
{path: "add-accommodation", component: AddAccommodationComponent},
{path: "add-restaurant", component: AddRestaurantComponent},
{path: "user", component: UserVisitOverviewComponent},
{path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
