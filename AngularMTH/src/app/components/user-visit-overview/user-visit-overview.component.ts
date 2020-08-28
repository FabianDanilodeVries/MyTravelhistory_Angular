import { HolidayLocationVisitService } from '../../services/holiday-location-visit.service';
import { HolidayLocationVisit } from '../../models/HolidayLocationVisit';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-visit-overview',
  templateUrl: './user-visit-overview.component.html',
  styleUrls: ['./user-visit-overview.component.scss']
})
export class UserVisitOverviewComponent implements OnInit {


  visits: HolidayLocationVisit[];
  userLoggedInId : number;

  constructor(private holidayLocationVisitService: HolidayLocationVisitService, userLoggedIn: User) {
      this.userLoggedInId = userLoggedIn.userId;
   }

  ngOnInit(): void {
      this.visits = [];
      this.holidayLocationVisitService.findUserHLVisits(this.userLoggedInId).subscribe(listOfHolidayLocationVisits =>{
        this.visits = listOfHolidayLocationVisits;
      })
  }

}