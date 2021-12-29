import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Mail {
  body: string;
  cc: string;
  from: string;
  id: string;
  read: boolean;
  subject: string;
  to: string;
}
@Component({
  selector: 'app-recieved',
  templateUrl: './recieved.component.html',
  styleUrls: ['./recieved.component.scss'],
})
export class RecievedComponent implements OnInit, AfterViewInit {
  @ViewChild('mailColor')mailColor:ElementRef;
  recievedMail: Mail[] = [];
  mails:any;
  mailId:string;
  dataSource = new MatTableDataSource([]);
  constructor(private router:Router,private renderer:Renderer2) {}

  ngOnInit(): void {
    this.getRecieved(); 
  }
  displayedColumns: string[] = ['From', 'Subject', 'Id'];

  getRecieved() {
   this.mailId= localStorage.getItem('loggedIn');
    this.mails = JSON.parse(localStorage.getItem(this.mailId));
    this.recievedMail = this.mails[0].recievedMail;
    this.dataSource = new MatTableDataSource([...this.recievedMail]);
  }
  ngAfterViewInit(): void {
    this.mailCount();
  }
 
  mailCount() {
    let count = 0;
    this.recievedMail.forEach((ele) => {
      if (ele.read === false) {
        count++;
      }
    });
    localStorage.setItem('count', JSON.stringify(count));
  }
  count(row) {
    this.recievedMail.forEach((ele) => {
      if (ele.id === row.id) {
        ele.read = true;
      }
    });
    let updateMail =[ {
      recievedMail:this.recievedMail,
      sentMail:this.mails[0].sentMail,
      user:this.mails[0].user
    }]
    localStorage.setItem(this.mailId,JSON.stringify(updateMail))
    this.mailCount();
    this.router.navigate(['/inbox/mail-module','recieved-details'],{
      queryParams:{
        id:row.id
      }
    })
  }
}
