import { NgModule } from '@angular/core';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { RecipientComponent } from './recipient/recipient.component';
import { TransferComponent } from './transfer/transfer.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';


@NgModule({
  declarations: [
    PortalComponent,
    RecipientComponent,
    TransferComponent,
    HomePortalComponent,
    TransferHistoryComponent,
  ],
  imports: [
    PortalRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
  ]
})
export class PortalModule { }
