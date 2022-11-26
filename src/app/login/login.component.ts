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
  errorMsg: boolean = false;

  constructor(private auth:UserService, private router: Router,){}

 login(){
  if (this.rutFormControl.valid && this.passwordFormControl.valid) {
    this.auth.login(this.rutFormControl.value!, this.passwordFormControl.value!)
    .subscribe({
      next: (response: any) => {
        console.log('sas')
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

  markAsError(){
    !this.rutFormControl.value && this.rutFormControl.markAsTouched();
    !this.passwordFormControl.value && this.passwordFormControl.markAsTouched();
  }

  showFailureMsg(){
    this.errorMsg = true;
    setTimeout(() => {
      this.errorMsg = false;
    }, 3000);
  }
}
