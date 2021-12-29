import { Component, OnInit, Output,EventEmitter, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterContentChecked {
  count:number;
@Output() toggleSidebars: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router,private cf:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
      this.toggleSidebars.emit();
  }
  logout(){
    localStorage.removeItem('loggedIn')
  this.router.navigate(['/auth','login'])
  }
  ngAfterContentChecked(): void {
      this.cf.detectChanges();
      this.count = JSON.parse(localStorage.getItem('count'));
  }
}
