import { LogInCredentials } from './../../models/LogInCredentials';
import { HolidayLocationVisit } from './../../models/HolidayLocationVisit';
import { TestBed } from '@angular/core/testing';
import { HolidayLocationVisitService } from '../../services/holiday-location-visit.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Accommodation } from './../../models/Accommodation';
import { Restaurant } from 'src/app/models/Restaurant';
import { LogInComponent } from '../login-register/log-in/log-in.component';

@Component({
  selector: 'app-user-visit-overview',
  templateUrl: './user-visit-overview.component.html',
  styleUrls: ['./user-visit-overview.component.scss']
})
export class UserVisitOverviewComponent implements OnInit {


  visits: HolidayLocationVisit[];
  userLoggedInId : number;

  tempIds : number[];
  userName : string;


  constructor(private holidayLocationVisitService: HolidayLocationVisitService) {
    this.userName = LogInComponent.userLoggedIn.userName;
   }

  ngOnInit(): void {
      this.visits = [];
      this.holidayLocationVisitService.findUserHLVisits(LogInComponent.userLoggedIn.userId).subscribe(listOfHolidayLocationVisits =>{
        this.visits = listOfHolidayLocationVisits;

      })
  }

  saveIds(clickedVisit : HolidayLocationVisit){
    this.tempIds = [];
    // this.tempIds.push(clickedVisit.restaurantId,clickedVisit.acccommodationId);
    console.log(this.tempIds);   
  }
}