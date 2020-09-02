import { LogInRegisterService } from 'src/app/services/log-in-register.service';
import { LogInCredentials } from 'src/app/models/LogInCredentials';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/UserDto';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  userLogInInput : LogInCredentials;
  uName : string;
  uPassword : string;
  userVerified : boolean;
  userLoggedIn : UserDto;

  constructor(private logInRegisterService : LogInRegisterService, private router: Router) {

  }

  ngOnInit(): void {
  }

  logIn(){
    this.userLogInInput = new LogInCredentials();
    this.userLogInInput.userName = this.uName;
    this.userLogInInput.password = this.uPassword;

    // POST for checking whether credentials are valid
    this.logInRegisterService.checkLogInCredentials(this.userLogInInput).subscribe(data => {
      // When valid we proceed to...GET for userDTO
      this.logInRegisterService.getUserDto(this.uName).subscribe(userData =>{
        //Saving in the local storage
        localStorage.setItem('loggedInUserName', userData.userName);
        localStorage.setItem('loggedInUserId', "" + userData.userId);        
        localStorage.setItem('loggedInUserEmail', userData.email);
        // Allow visiting the user overview site
        this.router.navigateByUrl('/home');
      })
    });
  }
}
