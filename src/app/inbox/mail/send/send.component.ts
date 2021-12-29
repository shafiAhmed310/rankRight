import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Mail } from '../recieved/recieved.component';



@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  recievedMail:Mail[]=[];
  dataSource= new MatTableDataSource([])
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getRecieved()
  }
  displayedColumns: string[] = ['From', 'Subject', 'Id'];
  getRecieved(){
    let mailId = localStorage.getItem('loggedIn');
    this.recievedMail = JSON.parse(localStorage.getItem(mailId))[0].sentMail;
    this.dataSource  = new MatTableDataSource([...this.recievedMail])
  }
  navigate(row){
this.router.navigate(['/inbox/mail-module','send-details'],{
  queryParams:{
    id:row.id
  }
})
  }
}
