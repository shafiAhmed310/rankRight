import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [InboxComponent,HeaderComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule
  ]
})
export class InboxModule { }
