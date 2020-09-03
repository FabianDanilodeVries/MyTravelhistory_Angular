import { HolidayLocationVisitService } from './../../services/holiday-location-visit.service';
import { Component, OnInit } from '@angular/core';
import { AddAccommodationService } from 'src/app/Services/add-accommodation.service';
import { Accommodation } from 'src/app/models/Accommodation';
import { HolidayLocationVisit } from 'src/app/models/HolidayLocationVisit';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.scss']
})
export class AddAccommodationComponent implements OnInit {

  accommodations: Accommodation[];
  currentYourComment: string;
  currentYourRating: string;
  currentYourDate: string;
  newAccommodationVisit : HolidayLocationVisit;
  currentAccommodation : Accommodation;
  term : string;


  constructor(private service: AddAccommodationService, private holidayLocationVisitService : HolidayLocationVisitService, private router: Router) { 
  }

  ngOnInit(): void {
    this.currentAccommodation = new Accommodation();
    this.newAccommodationVisit = new HolidayLocationVisit();
    this.accommodations = [];
    this.service.showAllAccommodations().subscribe(listOfAllAccommodations =>{
      this.accommodations = listOfAllAccommodations;
    })
  }
  
  saveCurrentAccommodation(tempAccommodation : Accommodation){

    localStorage.setItem('selectedAccommodation', JSON.stringify(tempAccommodation));
    
    this.currentAccommodation = JSON.parse(localStorage.getItem('selectedAccommodation'));
    }

  saveNewAccommodationVisit(comment: string, rating: string, date : string){
    this.newAccommodationVisit.datum = date;
    this.newAccommodationVisit.comment = comment;
    this.newAccommodationVisit.rating = parseInt(rating);
    this.newAccommodationVisit.accId = this.currentAccommodation.accId;
    // console.log(this.newAccommodationVisit.accommodationId);
    this.newAccommodationVisit.restId = null;
    // console.log(this.userLoggedIn);
    this.newAccommodationVisit.userId = parseInt(localStorage.getItem("loggedInUserId"));
    this.newAccommodationVisit.visitType = "accommodation";
    console.log(this.newAccommodationVisit);
    
    this.holidayLocationVisitService.addUserVisit(this.newAccommodationVisit).subscribe(data => {
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
}