import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = '/api/login';

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<any>{
    return this.http.post(this.loginUrl, credentials);
  }
}
