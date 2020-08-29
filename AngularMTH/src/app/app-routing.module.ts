import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { AddAccommodationComponent } from './components/add-accommodation/add-accommodation.component';
import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';


const routes: Routes = [

{path: "", component: LoginRegisterComponent},
{path: "user/add-accommodation", component: AddAccommodationComponent},
{path: "user/add-restaurant", component: AddRestaurantComponent},
{path: "user", component: UserVisitOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }