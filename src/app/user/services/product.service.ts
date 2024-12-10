import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/envirnment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl=environments.apiUrl
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get(`${this.apiUrl}/products`)
  }
}
