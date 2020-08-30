import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { HolidayLocationVisit } from 'src/app/Model/HolidayLocationVisit';

@Injectable({
  providedIn: 'root'
})

export class HolidayLocationVisitService {

  constructor(private http: HttpClient) {
  
   }

   
   findUserHLVisits(userId: number): Observable<HolidayLocationVisit[]>{
    //  console.log(userId);
    return this.http.get<HolidayLocationVisit[]>('http://localhost:8082/HLVisit/findUserHLVisits/'+ userId)
   }
}