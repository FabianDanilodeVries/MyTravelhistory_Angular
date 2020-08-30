  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accommodation } from '../models/Accommodation';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AddAccommodationService {

  constructor(private http: HttpClient) { }

getByAccommodationName(accommodationName: string): Observable<Accommodation> {
  return this.http.get<Accommodation>('http://localhost:8888/findAccommodationByName');
}

showAllAccommodations(): Observable <Accommodation[]> {
  return this.http.get<Accommodation[]>('http://localhost:8888/Restaurant/showAllAccommodations');
}
}