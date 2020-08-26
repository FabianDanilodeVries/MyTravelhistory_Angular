import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './Components/add-restaurant/add-restaurant.component';
import { AddAccommodationComponent } from './Components/add-accommodation/add-accommodation.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserComponent } from './Components/user/user.component';


const routes: Routes = [ 
{path: "add-accommodation", component: AddAccommodationComponent},
{path: "add-restaurant", component: AddRestaurantComponent},
{path: "log-in", component: LogInComponent},
{path: "register", component: RegisterComponent},
{path: "user", component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
