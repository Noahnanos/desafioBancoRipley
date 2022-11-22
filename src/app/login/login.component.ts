import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  rutFormControl = new FormControl('', [Validators.required]);
  passwordFormControl= new FormControl('', [Validators.required]);
  
  constructor(private auth:LoginService, private router: Router,){}
 login(){
  if (this.rutFormControl.valid && this.passwordFormControl.valid) {
    this.auth.login(this.rutFormControl.value!, this.passwordFormControl.value!)
      .subscribe((resp) => {
        console.log(resp)
        this.router.navigate(['/portal/home']);
      });
  }
 }

}
