import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  @ViewChild('triggerForm', {
    static: false,
  })
  triggerForm: NgForm | undefined;
  registerForm: FormGroup;

  constructor(private toaster: ToastrService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$'
        ),
      ]),
    });
  }

  ngOnInit(): void {}
  user: any;
  loggedIn!: boolean;
  email: any;

  triggerSubmit() {
    if (!this.triggerForm) {
      console.warn('triggerForm not assigned a value');
    } else {
      if (this.triggerForm.valid) {
        this.triggerForm.ngSubmit.emit();
      }
    }
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  recievedMail: string[] = [];
  sentMail: string[] = [];

  onRegister(userData: FormGroup) {
    let registeredUser = [
      {
        recievedMail: this.recievedMail,
        sentMail: this.sentMail,
        user: userData.value,
      },
    ];

    if (!localStorage.getItem(userData.get('email').value)) {
      localStorage.setItem(
        userData.get('email').value,
        JSON.stringify(registeredUser)
      );
      this.toaster.success('User registered successfully');
      this.router.navigate(['/auth', 'login']);
    } else {
      this.toaster.error('User already exists');
    }
  }
}
