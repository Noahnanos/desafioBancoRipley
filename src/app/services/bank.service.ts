import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bank } from '../interfaces/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseURL = environment.apiURL;
  constructor(private http: HttpClient) { }

  getBank(): Observable<{banks:Bank[]}> {
    const url = this.baseURL;
    return this.http.get<{banks:Bank[]}>(url);
  }
}
