import { Injectable } from '@angular/core';
import { UserDto } from '../models/UserDto';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/Register';
import { LogInCredentials } from '../models/LogInCredentials';
import { environment } from '../../environments/environment';
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
     return this.http.post<Register>(`${environment.apiUrl}/user/createNewUser`,newUser);
   }

   checkLogInCredentials(someCredentials: LogInCredentials):Observable<any>{
    return this.http.post<LogInCredentials>(`${environment.apiUrl}/user/logIn`, someCredentials);
  }

  getUserDto(userName: string):Observable<UserDto>{
    return this.http.get<UserDto>(`${environment.apiUrl}/user/findByUserName/` + userName);
  }
}
