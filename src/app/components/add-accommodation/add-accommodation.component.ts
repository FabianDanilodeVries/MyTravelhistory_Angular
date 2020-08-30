import { Component, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/Model/Accommodation';
import { AddAccommodationService } from 'src/app/Services/add-accommodation.service';

@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.scss']
})
export class AddAccommodationComponent implements OnInit {

  accommodation: Accommodation;
  accommodationName: string;
  allRestaurants: Accommodation[];

  constructor(private service: AddAccommodationService ) { }

  ngOnInit(): void {
  }


  getByAccommodationName() {
    this.service.getByAccommodationName(this.accommodationName).subscribe(
      data => {
        this.accommodation = data;
      }
    );

}



}
