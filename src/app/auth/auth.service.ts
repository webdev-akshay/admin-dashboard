import { Injectable } from '@angular/core';
import { environments } from '../environments/envirnment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl=environments.apiUrl
  constructor(private http:HttpClient) { }

  userLogin(username:string,password:string):Observable<any>{
    const body={username,password}
    const headers=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(`${this.apiUrl}/auth/login`,body, {headers})
  }
}
