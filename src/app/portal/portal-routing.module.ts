import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { PortalComponent } from './portal.component';
import { RecipientComponent } from './recipient/recipient.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path: '', component: PortalComponent, 
  children: [
    {path: '', component: HomePortalComponent},
    {path: 'recipient', component: RecipientComponent},
    {path: 'transfer', component: TransferComponent}
  ]
},
{path: '**', redirectTo: 'recipient'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
