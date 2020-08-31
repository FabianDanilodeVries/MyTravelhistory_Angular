
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accommodation } from '../models/Accommodation';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AddAccommodationService {

  constructor(private http: HttpClient) { }

getByAccommodationName(accommodationName: string): Observable<Accommodation> {
  return this.http.get<Accommodation>(`${environment.apiUrl}/findAccommodationByName`);
}

showAllAccommodations(): Observable <Accommodation[]> {
  return this.http.get<Accommodation[]>(`${environment.apiUrl}/Restaurant/showAllAccommodations`);
}
}
