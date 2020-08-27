import { HolidayLocationVisitService } from './../../services/holiday-location-visit.service';
import { HolidayLocationVisit } from './../../models/HolidayLocationVisit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  visits: HolidayLocationVisit[];
  userLoggedInId : string;

  constructor(private holidayLocationVisitService: HolidayLocationVisitService, ) {

   }

  ngOnInit(): void {
     // this.visits = [];
     // this.holidayLocationVisitService.findUserHLVisits(userId : string).subscribe(listOfHolidayLocationVisits =>{
     //   this.visits = listOfHolidayLocationVisits;
     // })
  }

}
