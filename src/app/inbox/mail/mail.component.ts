import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailDialogComponent } from '../mail-dialog/mail-dialog.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit,AfterContentChecked {
  count
  constructor(private dialog:MatDialog,private cf:ChangeDetectorRef) { }

  ngOnInit(): void {
   
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(MailDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log(result);
     
    });
  }
  ngAfterContentChecked(): void {
    this.cf.detectChanges();
    this.count = JSON.parse(localStorage.getItem('count'));
}
}
