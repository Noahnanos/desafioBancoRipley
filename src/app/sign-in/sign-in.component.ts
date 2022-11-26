import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
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
  errorMsg: boolean = false;
  matcher = new ErrorStateMatcher();

  constructor(private userService:UserService, private router: Router){}

  register(){

    if (this.validForm()) {
      this.userService.regitrarUsuario({
        email: this.emailFormControl.value!,
        rut: this.rutFormControl.value!,
        username: this.nameFormControl.value!,
        password: this.passwordFormControl.value!,
      }).subscribe({
          next: (response: any) => {
            this.router.navigate(['/portal']); 
          },
          error: (error) => {
            this.showFailureMsg();
          }
      });
    }else{
      this.markAsError();
    }
  };
  

  validForm(){
    return (this.rutFormControl.valid && this.nameFormControl.valid 
     && this.emailFormControl.valid && this.passwordFormControl.valid);
  }

  markAsError(){
    !this.rutFormControl.value && this.rutFormControl.markAsTouched();
    !this.nameFormControl.value && this.nameFormControl.markAsTouched();
    !this.emailFormControl.value && this.emailFormControl.markAsTouched();
    !this.passwordFormControl.value && this.passwordFormControl.markAsTouched();
  }
 
  showFailureMsg(){
    this.errorMsg = true;
    setTimeout(() => {
      this.errorMsg = false;
    }, 3000);
  }

}
