import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = '/api/login';

  constructor(private http: HttpClient) { }


  postLogin(credentials: Login): Observable<any>{
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }
}
