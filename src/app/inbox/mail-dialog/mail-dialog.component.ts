import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-mail-dialog',
  templateUrl: './mail-dialog.component.html',
  styleUrls: ['./mail-dialog.component.scss']
})
export class MailDialogComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: DialogData;
  
  sendMail: FormGroup;
  panelOpenState = false;
  constructor(private toastr:ToastrService,private dialogRef:MatDialogRef<MailDialogComponent> ) { 
    this.sendMail = new FormGroup({
      from: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/)
      ]),
      to: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
       ]),
      cc: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
        Validators.email
      ]),
      subject: new FormControl(''),
      body: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
    let currentUser = localStorage.getItem('loggedIn');
    if(currentUser){
      this.sendMail.get('from').setValue(currentUser)
    }
   
    
  }
 
  get sendMailControl() {
    return this.sendMail.controls;
  }
  onAddEmployee(form:FormGroup) {
    let email = form.get('to').value;
    let cc = form.get('cc').value;
    let recievedUser = JSON.parse(localStorage.getItem(email));
    let loggedInUser = localStorage.getItem("loggedIn");
    let sendUsers = JSON.parse(localStorage.getItem(loggedInUser));
    if(cc){
      var ccUser =  JSON.parse(localStorage.getItem(cc));
    }
    if(recievedUser){
      let recievedMail = recievedUser[0].recievedMail as string[];
      let sentMail = sendUsers[0].sentMail as string[];
   
    
      let id = {
        id:uuid(),
        read:false
      }
      let mail = {...form.value,...id}; 
      recievedMail.push(mail);
      sentMail.push(mail)
      let  registeredUser = [{
        recievedMail:recievedMail,
        sentMail:recievedUser[0].sentMail,
        user:recievedUser[0].user
       }
       ]
       if(ccUser){
        let recievedMailCC = ccUser[0].recievedMail as string[];
        recievedMailCC.push(mail)
        var  ccUserMail = [{
          recievedMail:recievedMailCC,
          sentMail:ccUser[0].sentMail,
          user:ccUser[0].user
         }
         ]
         localStorage.setItem(cc,JSON.stringify(ccUserMail));
       }
       let  sendUser = [{
        recievedMail:sendUsers[0].recievedMail,
        sentMail:sentMail,
        user:sendUsers[0].user
       }
       ]
       localStorage.setItem(loggedInUser,JSON.stringify(sendUser));
       localStorage.setItem(email,JSON.stringify(registeredUser));
       this.dialogRef.close();
      this.toastr.success('Mail sent successfully');

    }else{
      this.toastr.error('Invalid mail id')
    }
    
    
  }
}
