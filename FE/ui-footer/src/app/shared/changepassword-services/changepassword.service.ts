import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  
  public saveChangedPassword=(userName:string,currentPassword:string,password:string)=>{     
    let body={"userName": userName,
    "currentPassword": currentPassword,
    "value": password}
    return this.http.post<any>(`${environment.apiUrl}/changePassword`,body,this.generateHeaders())
        .pipe(map(data => { 
            return data;
        }));
  }

   
  private generateHeaders = () => {
    let header=new HttpHeaders({ 'Content-Type': 'application/json' });
     return {
       headers: header
     }
   }
}
