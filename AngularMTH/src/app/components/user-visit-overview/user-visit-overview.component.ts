import { LogInCredentials } from './../../models/LogInCredentials';
import { HolidayLocationVisit } from './../../models/HolidayLocationVisit';
import { TestBed } from '@angular/core/testing';
import { HolidayLocationVisitService } from '../../services/holiday-location-visit.service';

import { Component, OnInit } from '@angular/core';
import { Accommodation } from './../../models/Accommodation';
import { Restaurant } from 'src/app/models/Restaurant';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-visit-overview',
  templateUrl: './user-visit-overview.component.html',
  styleUrls: ['./user-visit-overview.component.scss']
})
export class UserVisitOverviewComponent implements OnInit {


  visits: HolidayLocationVisit[];

  tempVisit : HolidayLocationVisit;
  tempRest : Restaurant;
  tempAcc : Accommodation;
  whichModal : any;
  isARestaurant : boolean;
  nameUserLoggedIn : string;
  


  constructor(private holidayLocationVisitService: HolidayLocationVisitService, public datepipe: DatePipe, private router: Router, route : ActivatedRoute) {

    this.tempRest = new Restaurant();
    this.tempAcc = new Accommodation();
    this.tempVisit = new HolidayLocationVisit();
   }

  ngOnInit(): void {
    this.nameUserLoggedIn = localStorage.getItem("loggedInUserEmail");
    this.visits = [];
    this.holidayLocationVisitService.findUserHLVisits(this.getUserIdFromStorage()).subscribe(listOfHolidayLocationVisits =>{
      for(let vis of listOfHolidayLocationVisits){
        vis.datum = this.datepipe.transform(vis.datum, 'yyyy/MM/dd');
      }
      this.visits = listOfHolidayLocationVisits;

    })
  }

  saveIds(clickedVisit : HolidayLocationVisit){

    this.tempVisit = clickedVisit;
    if(this.tempVisit.visitType == "accommodation"){
      this.isARestaurant = false;
      console.log("accommodation");
      this.tempAcc = this.tempVisit["accommodation"];
      console.log(this.tempAcc);
    }else{
      this.isARestaurant = true;
      console.log("restaurant");
      this.tempRest = this.tempVisit["restaurant"];
      console.log(this.tempRest);
    }
  }

  deleteVisit(){
    this.holidayLocationVisitService.deleteUserVisit(this.tempVisit.visitId).subscribe(deleteSuccess =>{
      this.ngOnInit();
    })
  }

  getUserIdFromStorage(){
    return parseInt(localStorage.getItem("loggedInUserId"));
  }
}
