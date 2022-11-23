import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../services/user.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  rutFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl= new FormControl('', [Validators.required]);
  matcher = new ErrorStateMatcher();

  constructor(private userService:UserService){}

  register(){

    if (this.validForm()) {
      this.userService.regitrarUsuario({
        email: this.emailFormControl.value!,
        rut: this.rutFormControl.value!,
        username: this.nameFormControl.value!,
        password: this.passwordFormControl.value!
      });
    }
  }

  validForm(){
    return (this.rutFormControl.valid && this.nameFormControl.valid 
     && this.emailFormControl.valid && this.passwordFormControl.valid);
  }
 
}
