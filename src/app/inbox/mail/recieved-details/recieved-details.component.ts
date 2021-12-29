import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recieved-details',
  templateUrl: './recieved-details.component.html',
  styleUrls: ['./recieved-details.component.scss']
})
export class RecievedDetailsComponent implements OnInit {
id:string;
currentUser:any;
from:string;
subject:string;
body:string
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(res=>{
     this.id = res.id
    });

this.getMail()
  }
getMail(){
  this.currentUser = JSON.parse( localStorage.getItem(localStorage.getItem('loggedIn')))[0].recievedMail;

  this.currentUser.forEach(ele => {
      if(ele){
        if(ele.id===this.id){
          this.from = ele.from;
          this.subject = ele.subject;
          this.body = ele.body
        }
      }
  });
}
}
