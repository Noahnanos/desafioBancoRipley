import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { BankService } from 'src/app/services/bank.service';
import { UserService } from '../../services/user.service'

interface accountType {
  value: string;
}

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss']
})
export class RecipientComponent implements OnInit{
  

  rutFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  bankFormControl = new FormControl('', [Validators.required]);
  accountFormControl = new FormControl('', [Validators.required]);
  accountNumberFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  showSuccess: boolean = false;
  showFailure: boolean = false;
  mensaje: string = ""
  matcher = new ErrorStateMatcher();
  banks: any[] = [];

  constructor(private bankService: BankService, private userService: UserService) {}
  ngOnInit(): void {
    this.getBanks()
  }

  getBanks(){
    this.bankService.getBank().subscribe( ({banks}) => {
      banks.forEach((bank, i) => {this.banks.push({value: bank.name})});
    });
  }
  accounts: accountType[] = [
    {value: 'Cuenta Vista'},
    {value: 'Cuenta Corriente'},
    {value: 'Cuenta Rut'},
  ];


  registerRecipient(){
    if (this.validForm()) {
      this.userService.regitrarDestinatario({
        username: this.nameFormControl.value!,
        rut: this.rutFormControl.value!,
        email: this.emailFormControl.value!,
        phone: this.phoneFormControl.value!,
        bank: this.bankFormControl.value!,
        accountType: this.accountFormControl.value!,
        accountNumber: parseInt(this.accountNumberFormControl.value!),
      }).subscribe((response: any) => {
        console.log(response)
         this.resetForm();
         this.showSuccessMsg();
         this.mensaje = response.msg;
      });
    } else {
      this.showFailureMsg();
    }
  }

  resetForm(){
    this.nameFormControl.reset();
    this.rutFormControl.reset();
    this.emailFormControl.reset();
    this.phoneFormControl.reset();
    this.bankFormControl.reset();
    this.accountFormControl.reset();
    this.accountNumberFormControl.reset();
  }

  validForm(){
    return (
      this.rutFormControl.valid && this.nameFormControl.valid 
     && this.emailFormControl.valid && this.phoneFormControl.valid 
     && this.bankFormControl.valid && this.accountFormControl.valid
     && this.accountNumberFormControl.valid);
  }

  showSuccessMsg( ){
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000);
  }

  showFailureMsg(){
    this.showFailure = true;
    setTimeout(() => {
      this.showFailure = false;
    }, 3000);
  }
}
