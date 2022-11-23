import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  rutFormControl = new FormControl('', [Validators.required]);
  passwordFormControl= new FormControl('', [Validators.required]);
  
  constructor(private auth:UserService, private router: Router,){}

 login(){
  if (this.rutFormControl.valid && this.passwordFormControl.valid) {
    this.auth.login(this.rutFormControl.value!, this.passwordFormControl.value!);
  }};

}
