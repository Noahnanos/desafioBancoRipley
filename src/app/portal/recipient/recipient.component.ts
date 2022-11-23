import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { BankService } from 'src/app/services/bank.service';

interface accountType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss']
})
export class RecipientComponent implements OnInit{
  

  rutFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new ErrorStateMatcher();
  banks: any[] = [];

  constructor(private bankService: BankService) {}
  ngOnInit(): void {
    this.getBanks()
  }

  getBanks(){
    this.bankService.getBank().subscribe( ({banks}) => {
      banks.forEach((bank, i) => {this.banks.push({value: i, viewValue: bank.name})});
    });
  }
  accounts: accountType[] = [
    {value: 'vista-1', viewValue: 'Cuenta Vista'},
    {value: 'corriente-2', viewValue: 'Cuenta Corriente'},
    {value: 'rut-3', viewValue: 'Cuenta Rut'},
  ];
}
