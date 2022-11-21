import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { RecipientComponent } from './recipient/recipient.component';
import { TransferComponent } from './transfer/transfer.component';
import { HomePortalComponent } from './home-portal/home-portal.component';


@NgModule({
  declarations: [
    PortalComponent,
    RecipientComponent,
    TransferComponent,
    HomePortalComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
