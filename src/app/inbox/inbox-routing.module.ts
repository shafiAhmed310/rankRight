import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox.component';

const routes: Routes = [
  {path:'',redirectTo:'mail-module',pathMatch:'full'},
  {path:'',component:InboxComponent,children:[
    {
      path:'mail-module',
      loadChildren:()=>import('./mail/mail.module').then(m=>m.MailModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
