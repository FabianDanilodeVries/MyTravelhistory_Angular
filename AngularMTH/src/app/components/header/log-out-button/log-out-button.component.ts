import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInComponent } from '../../login-register/log-in/log-in.component';

@Component({
  selector: 'app-log-out-button',
  templateUrl: './log-out-button.component.html',
  styleUrls: ['./log-out-button.component.scss']
})
export class LogOutButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl("");
        localStorage.removeItem("loggedInUserId");
        localStorage.removeItem("loggedInUserName");
        localStorage.removeItem("loggedInUserEmail");
        localStorage.removeItem("selectedRestaurant");
        localStorage.removeItem("selectedAccommodation");
  }

}
