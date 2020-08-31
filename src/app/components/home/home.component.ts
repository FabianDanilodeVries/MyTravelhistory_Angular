import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../login-register/log-in/log-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName : string;
  constructor() {
    this.userName = LogInComponent.userLoggedIn.userName;
   }

  ngOnInit(): void {
  }

}