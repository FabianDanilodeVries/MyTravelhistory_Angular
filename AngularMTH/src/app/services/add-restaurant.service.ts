import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/Restaurant';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AddRestaurantService {

  constructor(private http: HttpClient) { }

getByRestaurantName(restaurantName: string): Observable<Restaurant> {
  return this.http.get<Restaurant>(`${environment.apiUrl}/api/restaurants/all`);
}

showAllRestaurants(): Observable <Restaurant[]> {
  return this.http.get<Restaurant[]>(`${environment.apiUrl}/showAllRestaurants`);
}
}
