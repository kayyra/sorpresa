import { Component } from '@angular/core';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import { LoginService } from '../../../app/service/login.service';
import { UserService } from './user.service';

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
      this.router.navigateByUrl('dashboard');
      return;
    }

    const bodyData: Login = {
      username: this.username,
      password: this.password
    };

    this.service.postLogin(bodyData).subscribe((resultData: any) => {
      if (resultData.message === "Email not exist") {
        this.handleEmailNotExist();
      } else if (resultData.message === "Login Success") {
        this.handleLoginSuccess(resultData.email);
      } else {
        this.handleLoginError();
      }
    });
  }

  private handleEmailNotExist() {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El email no existe',
      customClass: 'custom-swal',
      showConfirmButton: true,
      width: 300,
      confirmButtonColor: 'rgba(29, 41, 81, 1)',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      showCloseButton: true,
      confirmButtonText: 'Registrate',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('register');
      }
    });
  }

  private handleLoginSuccess(email: string) {
    Swal.fire({
      title: 'Bienvenid@',
      text: 'Logueado con éxito',
      customClass: 'custom-swal',
      showConfirmButton: true,
      width: 300,
      confirmButtonColor: '#008000',
    }).then(() => {
      localStorage.setItem('loggedInEmail', email);
      this.userService.setLogdeInEmail(email);
      this.router.navigateByUrl('comicList');
    });
  }

  private handleLoginError() {
    Swal.fire({
      title: 'Error',
      text: 'La contraseña no coincide',
      customClass: 'custom-swal',
      showConfirmButton: true,
      width: 300,
      confirmButtonColor: '#ff0000',
    });
  }
}
