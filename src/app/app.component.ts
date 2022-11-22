import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  path:string ='';
  private subscriber!: Subscription;

  title = 'desafioBancoRipley';

  constructor( private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.subscriber = this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event) => this.path = event['url']);
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToSignIn(){
    this.router.navigate(['/sign-in']);
  }

  isPortal(){
    return this.path.includes('portal');
  }

 ngOnDestroy () {
    this.subscriber?.unsubscribe();
 }
}
