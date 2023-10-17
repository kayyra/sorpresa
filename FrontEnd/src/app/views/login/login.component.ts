import { Component } from '@angular/core';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import { LoginService } from '../../../app/service/login.service';
import { UserService } from '../../../app/service/user.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private service: LoginService,
    private router: Router,
    private userService: UserService
  ) {}

  login() {
    if (this.username === "felizcumpleaños" && this.password === "123456") {
      this.showSuccessAlert();
      this.router.navigateByUrl('dashboard');
    } else {
      this.showErrorAlert();
    }
    const bodyData: Login = {
      username: this.username,
      password: this.password
    };
   
  }  

    private showSuccessAlert(){
      Swal.fire({
        title: '¡Feliz Cumpleaños!',
        text: 'Espero que hoy lo estés pasando genial',
        icon: 'success',
        customClass: 'custom-swal',
        showConfirmButton: true,
        confirmButtonColor: '#8B4513',
      });
    }

    private showErrorAlert(){
      Swal.fire({
        title: 'Error',
        text: 'La contraseña no coincide',
        customClass: 'custom-swal',
        showConfirmButton: true,
        confirmButtonColor: 'ff0000',
      });
    }
    
  }
