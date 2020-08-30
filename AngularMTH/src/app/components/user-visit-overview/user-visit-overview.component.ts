import { LogInCredentials } from './../../models/LogInCredentials';
import { HolidayLocationVisit } from './../../models/HolidayLocationVisit';
import { TestBed } from '@angular/core/testing';
import { HolidayLocationVisitService } from '../../services/holiday-location-visit.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Accommodation } from './../../models/Accommodation';
import { Restaurant } from 'src/app/models/Restaurant';
import { LogInComponent } from '../login-register/log-in/log-in.component';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-visit-overview',
  templateUrl: './user-visit-overview.component.html',
  styleUrls: ['./user-visit-overview.component.scss']
})
export class UserVisitOverviewComponent implements OnInit {


  visits: HolidayLocationVisit[];
  userLoggedInId : number;

  tempVisit : HolidayLocationVisit;
  tempRest : Restaurant;
  tempAcc : Accommodation;
  userName : string;
  whichModal : any;
  dataTarget : HTMLElement;
  isARestaurant : boolean;


  constructor(private holidayLocationVisitService: HolidayLocationVisitService, public datepipe: DatePipe, private router: Router) {
    this.userName = LogInComponent.userLoggedIn.userName;
    this.tempRest = new Restaurant();
    this.tempAcc = new Accommodation();
    this.tempVisit = new HolidayLocationVisit();
   }

  ngOnInit(): void {
      this.visits = [];
      this.holidayLocationVisitService.findUserHLVisits(LogInComponent.userLoggedIn.userId).subscribe(listOfHolidayLocationVisits =>{
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
}
