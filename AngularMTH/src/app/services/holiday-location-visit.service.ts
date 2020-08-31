import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { HolidayLocationVisit } from './../models/HolidayLocationVisit';

@Injectable({
  providedIn: 'root'
})

export class HolidayLocationVisitService {

  constructor(private http: HttpClient) {

   }


   findUserHLVisits(userId: number): Observable<HolidayLocationVisit[]>{
    //  console.log(userId);
    return this.http.get<HolidayLocationVisit[]>(`${environment.apiUrl}/HLVisit/findUserHLVisits/`+ userId)
   }

   deleteUserVisit(visitId: number): Observable<any>{
     return this.http.delete<number>(`${environment.apiUrl}/HLVisit/deleteHLVisit/` + visitId);
   }
}
