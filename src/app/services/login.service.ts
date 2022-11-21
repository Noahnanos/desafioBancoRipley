import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = environment.url;

  constructor(private http: HttpClient) { }


  login(rut:string, password: string){
    
    return this.http.post(`${this.url}/user/login`, {rut, password});
  }
}
