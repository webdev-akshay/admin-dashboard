import { Injectable } from '@angular/core';
import { environments } from '../../environments/envirnment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private  apiUrl=environments.apiUrl;
  constructor(private http:HttpClient) { }

  getCategories():Observable<any>{
   return this.http.get(`${this.apiUrl}/products/categories`)
  }
}
