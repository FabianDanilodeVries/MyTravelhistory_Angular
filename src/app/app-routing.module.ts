import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from 'src/app/components/add-restaurant/add-restaurant.component';
import { AddAccommodationComponent } from 'src/app/components/add-accommodation/add-accommodation.component';
import { LogInComponent } from 'src/app/components/login-register/log-in/log-in.component';
import { RegisterComponent } from 'src/app/components/login-register/register/register.component';
import { UserVisitOverviewComponent } from './components/user-visit-overview/user-visit-overview.component';


const routes: Routes = [ 
{path: "add-accommodation", component: AddAccommodationComponent},
{path: "add-restaurant", component: AddRestaurantComponent},
{path: "log-in", component: LogInComponent},
{path: "register", component: RegisterComponent},
{path: "user", component: UserVisitOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
