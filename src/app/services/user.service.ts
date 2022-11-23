import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.url;
  private usuario!: User;

  constructor(
    private router: Router,
    private http: HttpClient,
  ){
    const item = JSON.parse(localStorage.getItem('user') || '');
    if(item) this.usuario = item;
  }

  getUser():User{
    return this.usuario;
  }

  regitrarUsuario(usr: User): void {
    this.http
      .post<User>(this.baseUrl + '/user/register', usr)
      .subscribe((response:any) => {
        this.usuario = response.user;
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(this.usuario));
        this.router.navigate(['/portal']);
      });
  }

  login(rut:string, password: string): void {
    this.http
      .post<User>(this.baseUrl + '/user/login', {rut, password})
      .subscribe((response:any) => {
        this.usuario = response.user;
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(this.usuario));
        this.router.navigate(['/portal']);
      });
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
}
