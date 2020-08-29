import { Injectable } from '@angular/core';
import { UserDto } from '../models/UserDto';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/Register';
import { LogInCredentials } from '../models/LogInCredentials';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  observe: 'response'
};

@Injectable({
  providedIn: 'root'
})

export class LogInRegisterService {

  constructor(private http: HttpClient) {
   }


   registerUser(newUser: Register): Observable<Register>{
     console.log("we get here");
     return this.http.post<Register>('http://localhost:8082/user/createNewUser',newUser);
   }

   checkLogInCredentials(someCredentials: LogInCredentials):Observable<any>{
    return this.http.post<LogInCredentials>('http://localhost:8082/user/logIn', someCredentials);
  }

  getUserDto(userName: string):Observable<UserDto>{
    console.log("we got here");
    return this.http.get<UserDto>('http://localhost:8082/user/findByUserName/' + userName);
  }
}
