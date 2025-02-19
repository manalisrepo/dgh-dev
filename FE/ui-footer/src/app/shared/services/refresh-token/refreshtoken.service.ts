import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { of, throwError,catchError } from 'rxjs';
import * as singleSpa from 'single-spa';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefreshtokenService {

  constructor(
    private router: Router,
    private http: HttpClient
) { }

public refreshToken1=()=>{
  let tokens=JSON.parse(sessionStorage.getItem('tokens')||'');
  let body={ 
    refreshToken:tokens?tokens.refreshToken:""
    } 
      
  return this.http.post<any>(`${environment.apiUrl}/getAccessToken`,body,this.generateHeadersWithToken())
      .pipe(map(data => {         
          sessionStorage.setItem("tokens", JSON.stringify(data.responseObject));
          return data;
      }),catchError(this.handleError));
}
public refreshToken=()=>{
  let tokens=JSON.parse(sessionStorage.getItem('tokens')||'');
  let body={ 
    refreshToken:tokens?tokens.refreshToken:""
    } 
      
    return this.http.post(environment.apiUrl+'/getAccessToken',body,this.generateHeadersWithToken()).pipe(map(
      (res:any)=>{
          if(res.responseObject && res.status==="1")
          {
            sessionStorage.setItem("tokens", JSON.stringify(res.responseObject));
            return res;
          }
          else 
          {
           
            return of({})
          }
            
        }),catchError(this.handleError))
  }

  public handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
      } 
      else {
        if (error.status===504)
          errorMessage=`Error Code:' ${error.status}\n Message: 'Gateway Timeout'`;
          
          else if(error.status===401)
          {
          errorMessage=`Error Code:${error.status}\n Message:'Unauthorized'`;
          localStorage.clear();
          sessionStorage.clear();
          singleSpa.navigateToUrl('/login')  
        }
        else if(error.status===415)
          errorMessage=`Error Code:${error.status}\n Message:'Unsupported Media Type'`;

        else if (error.status=500)
          errorMessage=`Error Code:${error.status}\n Message:'Internal Server Error'`;
      
        else 
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      
      return throwError(() => {
          return errorMessage;
      });
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
