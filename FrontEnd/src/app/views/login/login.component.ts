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
        confirmButtonColor: '#008000',
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



  //   this.service.postLogin(bodyData).subscribe((resultData: any) => {
  //     if (resultData.message === "Email not exist") {     
  //     } else if (resultData.message === "Login Success") {
  //       this.handleLoginSuccess(resultData.email);
  //     } else {
  //       this.handleLoginError();
  //     }
  //   });
  // }
 
  // private handleLoginSuccess(email: string) {
  //   Swal.fire({
  //     title: 'Bienvenid@',
  //     text: 'Logueado con éxito',
  //     icon: 'success', 
  //     customClass: 'custom-swal',
  //     showConfirmButton: true,
  //     width: 300,
  //     confirmButtonColor: '#008000', 
  //   }).then((result) => {
  //     if (result.isConfirmed) {       
  //       this.router.navigateByUrl('dashboard');
  //     }
  //   });
  // }

  // private handleLoginError() {
  //   Swal.fire({
  //     title: 'Error',
  //     text: 'La contraseña no coincide',
  //     customClass: 'custom-swal',
  //     showConfirmButton: true,
  //     width: 300,
  //     confirmButtonColor: '#ff0000',
  //   });
  // }

