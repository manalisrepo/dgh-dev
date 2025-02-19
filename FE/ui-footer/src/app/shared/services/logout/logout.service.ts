import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private router: Router,
    private http: HttpClient
) { }

public logOut=()=>{
  let tokens=JSON.parse(sessionStorage.getItem('tokens')||'');
  let body={ 
    accessToken:tokens?tokens.accessToken:"",
    refreshToken:tokens?tokens.refreshToken:""
    } 
      
  return this.http.post<any>(`${environment.apiUrl}/sessionLogout`,body,this.generateHeadersWithToken())
      .pipe(map(data => {         
          sessionStorage.setItem("tokens", JSON.stringify(data.responseObject));
          return data;
      }));
}


private generateHeaders = () => {
  let header=new HttpHeaders({ 'Content-Type': 'application/json' });
  return {
    headers: header
  }
  }
  
  private generateHeadersWithToken = () => {
  let tokens=JSON.parse(sessionStorage.getItem('tokens')||'');
  let header= new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${tokens.accessToken}`,
  });
  
  return {
    headers: header
  }
  
  }
}
