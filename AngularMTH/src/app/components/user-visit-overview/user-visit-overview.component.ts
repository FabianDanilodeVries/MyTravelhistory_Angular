import { HolidayLocationVisit } from './../../models/HolidayLocationVisit';
import { TestBed } from '@angular/core/testing';
import { HolidayLocationVisitService } from '../../services/holiday-location-visit.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Accommodation } from './../../models/Accommodation';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-user-visit-overview',
  templateUrl: './user-visit-overview.component.html',
  styleUrls: ['./user-visit-overview.component.scss']
})
export class UserVisitOverviewComponent implements OnInit {


  visits: HolidayLocationVisit[];
  user: User;
  userLoggedInId : number;
  restaurants : Restaurant[];
  accommodation : Accommodation[];
  tempIds : number[];


  constructor(private holidayLocationVisitService: HolidayLocationVisitService) {
    this.user = new User;
    this.userLoggedInId = this.user.userId;

   }

  ngOnInit(): void {
      this.visits = [];
      this.holidayLocationVisitService.findUserHLVisits(this.userLoggedInId).subscribe(listOfHolidayLocationVisits =>{
        this.visits = listOfHolidayLocationVisits;

        for(let item of this.visits){
          console.log(item);
        }
      })
  }

  saveIds(clickedVisit : HolidayLocationVisit){
    this.tempIds = [];
    this.tempIds.push(clickedVisit.restaurantId,clickedVisit.accommodationId);
    console.log(this.tempIds);
  }
}
