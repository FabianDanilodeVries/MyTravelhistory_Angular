
import { HolidayLocationVisit } from 'src/app/Model/HolidayLocationVisit';
import { TestBed } from '@angular/core/testing';
import { HolidayLocationVisitService } from '../../services/holiday-location-visit.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User' ;
import { Accommodation } from 'src/app/Model/Accommodation';
import { Restaurant } from 'src/app/Model/Restaurant';
import { LogInComponent } from 'src/app/components/login-register/log-in/log-in.component';
import { DatePipe } from '@angular/common';

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
  tempDate : string;


  constructor(private holidayLocationVisitService: HolidayLocationVisitService, public datepipe: DatePipe) {
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
    this.tempDate = this.datepipe.transform(this.tempVisit.datum, 'yyyy/MM/dd');
    this.tempVisit.datum = this.tempDate;
    if(clickedVisit["restaurant"] != null){
      
      this.tempRest = new Restaurant();
      this.tempRest = clickedVisit["restaurant"];
      this.whichModal = document.getElementById("whichModal");
      this.whichModal.dataset.target = "#restModal"
    }else{
      this.tempAcc = new Accommodation();
      this.tempAcc = clickedVisit["accommodation"];
      this.whichModal = document.getElementById("whichModal");
      this.whichModal.dataset.target = "#accModal"
    }
    
    console.log(this.tempDate);
    console.log(this.tempAcc.accId);
    console.log(this.tempRest);
    
    
    // this.tempIds.push(clickedVisit.restaurantId,clickedVisit.acccommodationId);
    // console.log(this.tempId["accommodation"]["accommodationName"]);
    // console.log(this.tempId);

  }
}