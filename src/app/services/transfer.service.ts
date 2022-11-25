import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipient } from '../interfaces/recipient';
import { User } from '../interfaces/user.model';
import { Transfer } from '../interfaces/transfer';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  baseUrl = environment.url;

  constructor(
    private router: Router,
    private http: HttpClient,
    private userServ: UserService) { 
    }

    makeTransfer(transfer: Transfer): Observable<any> {
      return this.http
        .post(this.baseUrl + '/transfer/makeTransfer', transfer);
    }

    getRecipient(rut:String){
      return this.http
        .get(this.baseUrl + `/account/getRecipient?rut=${rut}&id=${this.userServ.getUser()._id}`);
    }

    getHistory(){
      return this.http
        .get(this.baseUrl + `/transfer/getTransfers?user=${this.userServ.getUser()._id}`);
    }
}
