import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';
import { RecievedDetailsComponent } from './recieved-details/recieved-details.component';
import { RecievedComponent } from './recieved/recieved.component';
import { SendDetailsComponent } from './send-details/send-details.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  {path:'',redirectTo:'recieved',pathMatch:'full'},
  {path:'',component:MailComponent,children:[
    {
path:'recieved',component:RecievedComponent
  },
{
  path:'send',component:SendComponent
},
{
  path:'recieved-details',component:RecievedDetailsComponent
},
{
  path:'send-details',component:SendDetailsComponent
}


]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
