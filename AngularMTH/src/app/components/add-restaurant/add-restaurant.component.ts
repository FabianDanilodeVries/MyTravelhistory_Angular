import { HolidayLocationVisitService } from './../../services/holiday-location-visit.service';
  
import { Component, OnInit } from '@angular/core';
import { AddRestaurantService } from 'src/app/Services/add-restaurant.service';
import { Restaurant } from 'src/app/models/Restaurant';
import { HolidayLocationVisit } from 'src/app/models/HolidayLocationVisit';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  restaurants: Restaurant[];
  currentYourComment: string;
  currentYourRating: string;
  currentYourDate: string;
  newRestaurantVisit : HolidayLocationVisit;
  currentRestaurant : Restaurant;
  searchInput : string;


  constructor(private service: AddRestaurantService, private holidayLocationVisitService : HolidayLocationVisitService, private router: Router) { 
  }

  ngOnInit(): void {
    this.currentRestaurant = new Restaurant();
    this.newRestaurantVisit = new HolidayLocationVisit();
    this.restaurants = [];
    this.service.showAllRestaurants().subscribe(listOfAllRestaurants =>{
      this.restaurants = listOfAllRestaurants;
    })
  }
  
  saveCurrentRestaurant(tempRestaurant : Restaurant){

    localStorage.setItem('selectedRestaurant', JSON.stringify(tempRestaurant));
    
    this.currentRestaurant = JSON.parse(localStorage.getItem('selectedRestaurant'));
    }

  saveNewRestaurantVisit(comment: string, rating: string, date : string){
    this.newRestaurantVisit.datum = date;
    this.newRestaurantVisit.comment = comment;
    this.newRestaurantVisit.rating = parseInt(rating);
    this.newRestaurantVisit.restId = this.currentRestaurant.restId;
    // console.log(this.newRestaurantVisit.restaurantId);
    this.newRestaurantVisit.accId = null;
    // console.log(this.userLoggedIn);
    this.newRestaurantVisit.userId = parseInt(localStorage.getItem("loggedInUserId"));
    this.newRestaurantVisit.visitType = "restaurant";
    console.log(this.newRestaurantVisit);
    
    this.holidayLocationVisitService.addUserVisit(this.newRestaurantVisit).subscribe(data => {
      this.fillTablesWithVisits();

    });
  }
  fillTablesWithVisits(){
    let holidayLocationVisitService: HolidayLocationVisitService
    let pipe : DatePipe;
    let router : Router;

    // userVisitOverViewComponent.tryOutFunction();
      this.router.navigateByUrl('/user');
  }

  getUserIdFromStorage(){
    return parseInt(localStorage.getItem("loggedInUserId"));
  }

  // filterResults(userInput : string){
  //   // console.log(this.)
  // }
}