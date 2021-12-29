import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  sideBarOpen:boolean = true;
  panelOpenState:boolean = false;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
 

