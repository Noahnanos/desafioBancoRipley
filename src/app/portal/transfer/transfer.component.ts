import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TransferService } from 'src/app/services/transfer.service';
import { UserService } from 'src/app/services/user.service';
import { Recipient } from '../../interfaces/recipient'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  finderFormControl = new FormControl('', [Validators.required]);
  mountFormControl = new FormControl('', [Validators.required]);
  destinatario?: Recipient;
  showFailure: boolean = false;
  showSuccessTransfer: boolean = false;
  showFailureTransfer: boolean = false;

  constructor(private transferService: TransferService, private user: UserService){}

  makeTransfer(){
    if(this.mountFormControl.valid && this.destinatario){
      this.transferService.makeTransfer({
        mount: this.mountFormControl.value!,
        date: new Date(),
        user: this.user.getUser()._id!,
        recipient: this.destinatario?._id!
      }).subscribe((response: any) => {
        console.log(response)
        if (response.status === "ok"){
          this.showSuccessTransferMsg();
        }else{
          this.showFailureTransferMsg();
        }
      })
    }else{
      this.markErrorsInput();
    }
  }

  getRecipient(){
    if (this.finderFormControl.valid){
      this.transferService.getRecipient(this.finderFormControl.value!)
        .subscribe((response: any) => {
         console.log(response)
         if (response.status === "ok") {
          this.destinatario = response.recipient;
          this.finderFormControl.reset();
          
         }else{
          this.showFailureMsg()
          this.finderFormControl.reset();
         }
        })
    }else{
      this.markErrorsInput();
    }
  }

  markErrorsInput(){
    !this.finderFormControl.value && this.finderFormControl.markAsTouched();
    !this.mountFormControl.value && this.mountFormControl.markAsTouched();
  }

  showFailureMsg(){
    this.showFailure = true;
    setTimeout(() => {
      this.showFailure = false;
    }, 3000);
  }

  showSuccessTransferMsg(){
    this.showSuccessTransfer = true;
    setTimeout(() => {
      this.showSuccessTransfer = false;
    }, 3000);
  }

  showFailureTransferMsg(){
    this.showFailureTransfer = true;
    setTimeout(() => {
      this.showFailureTransfer = false;
    }, 3000);
  }


}
