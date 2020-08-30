import { LogInRegisterService } from 'src/app/services/log-in-register.service';
import { LogInCredentials } from 'src/app/Model/LogInCredentials';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Model/UserDto';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  userLogInInput : LogInCredentials;
  static userLoggedIn = new UserDto();
  uName : string;
  uPassword : string;
  userVerified : boolean;
  
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
      // When valid we proceed to...
      this.createUserLoggedIn(this.uName);
      
      
    });
  }
  createUserLoggedIn(userName : string){
    // GET for userDTO
    this.logInRegisterService.getUserDto(userName).subscribe(userData =>{
        //Saving the userDto in the static field.
        LogInComponent.userLoggedIn = userData;;
        console.log(LogInComponent.userLoggedIn);
        // Allow visiting the user overview site
        this.router.navigateByUrl('/user');
    })
  }

  getUserLoggedInId(){
    return LogInComponent.userLoggedIn.userId;
  }
}