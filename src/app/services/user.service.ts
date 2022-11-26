import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipient } from '../interfaces/recipient';
import { User } from '../interfaces/user.model';


const initialUser = {
  username:"",
  rut:"",
  email:"",
  password:""
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.url;
  private usuario!: User;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    const item = this.getLocalStorage() ? JSON.parse(this.getLocalStorage()!) : initialUser;
    if (item) this.usuario = item;
  }

  getUser(): User {
    return this.usuario;
  }

  getLocalStorage(){
    return localStorage.getItem('user');
  }

  regitrarUsuario(usr: User): Observable<any> {
    return this.http
      .post<User>(this.baseUrl + '/user/register', usr)
      .pipe(
        tap((response: any) => {
          if(response.status === "OK"){
          this.usuario = response.user;
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(this.usuario));
        }
        })
      )
    }    

  login(rut: string, password: string): Observable<any> {
    return this.http
      .post<User>(this.baseUrl + '/user/login', { rut, password })
      .pipe(
        tap((response:any) => {
          if (response.status === "OK") {
            this.usuario = response.user;
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(this.usuario));
          }
        })
      )
  }
  
  regitrarDestinatario(recipient: Recipient): Observable<any> {
    const body = {
      id: this.usuario._id,
      recipientAccount: recipient
    }

    return this.http.post<Recipient>(this.baseUrl + '/account/addRecipients', body);
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
}
