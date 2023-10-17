import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogged:boolean = false;
  loggedInUsername: any;
  loggedInEmail: string = "";
  constructor(
    private router: Router
    ){};
  setLogdeInEmail(email:string){
    this.loggedInEmail = email;
   
  }
  getLoggedInEmail():string{
    return this.loggedInEmail;
  }

  setLoggedInUsername(username: string) {
    this.loggedInUsername = username;
  }

  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }
  setLogged(isLog:boolean){
    this.isLogged = isLog;
  }
  getLogged(){
    return this.isLogged;
  }
  logout(){
    this.isLogged = false;
    this.loggedInEmail = "";
    this.loggedInUsername = "";
    localStorage.setItem('email', '');
    this.router.navigateByUrl('/');
  }
}
