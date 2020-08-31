import { Component, OnInit } from '@angular/core';
import { LogInRegisterService } from 'src/app/services/log-in-register.service';
import { Register } from 'src/app/Model/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser : Register;
  emailReg : string;
  passwordReg : string;
  userNameReg : string;
  isValid : string;



  constructor(private logInRegisterService : LogInRegisterService) {
   }

  ngOnInit(): void {

  }

  registerNewUser(){
    this.newUser = new Register;
    this.newUser.email = this.emailReg;
    this.newUser.password = this.passwordReg;
    this.newUser.userName = this.userNameReg;
    this.logInRegisterService.registerUser(this.newUser).subscribe(data => {
      this.isValid = "";
      this.isValid = "Registration was successful!";
    });
  }

}