import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecievedComponent } from './recieved/recieved.component';
import { SendComponent } from './send/send.component';
import { MailDialogComponent } from '../mail-dialog/mail-dialog.component';
import { RecievedDetailsComponent } from './recieved-details/recieved-details.component';
import { SendDetailsComponent } from './send-details/send-details.component';



@NgModule({
  declarations: [MailComponent, RecievedComponent, SendComponent,MailDialogComponent, RecievedDetailsComponent, SendDetailsComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    SharedModule
  ]
})
export class MailModule { }
