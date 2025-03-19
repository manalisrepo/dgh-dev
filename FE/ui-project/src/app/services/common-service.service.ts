import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<any[]> {
    let url = 'http://192.168.0.47:8091/userrole/getRoles';
    return this.http.get<any[]>(url).pipe(delay(2000), shareReplay());
  }
}
