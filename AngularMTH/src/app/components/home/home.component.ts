import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../login-register/log-in/log-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName : string;

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    
    this.userName = localStorage.getItem("loggedInUserName");

  }

}
