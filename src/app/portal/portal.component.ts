import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {
  path:string ='';
  private subscriber!: Subscription;

  constructor( private router: Router, private activatedRoute: ActivatedRoute){}
 
  ngOnInit(): void {
    this.subscriber = this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event) => this.path = event['url']);
  }

  navigateToRecipient(){
    this.router.navigate(['/portal/recipient']);
  }
  navigateToTransfer(){
    this.router.navigate(['/portal/transfer']);
  }
  navigateToTransferHistory(){
    this.router.navigate(['/portal/history']);
  }
}
