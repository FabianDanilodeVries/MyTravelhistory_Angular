import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/Model/Restaurant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AddRestaurantService {

  constructor(private http: HttpClient) { }

getByRestaurantName(restaurantName: string): Observable<Restaurant> {
  return this.http.get<Restaurant>('http://localhost:8889/api/restaurants/all');
}

showAllRestaurants(): Observable <Restaurant[]> {
  return this.http.get<Restaurant[]>('http://localhost:8889/showAllRestaurants');
}
}