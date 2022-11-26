import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-portal',
  templateUrl: './home-portal.component.html',
  styleUrls: ['./home-portal.component.scss']
})
export class HomePortalComponent {

  constructor (private userService: UserService){}

  getUser(){
    return this.userService.getUser();
  }
}
