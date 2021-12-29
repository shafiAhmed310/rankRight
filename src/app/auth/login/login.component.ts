import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  @ViewChild('triggerForm', { static: false }) triggerForm: NgForm | undefined;
  loginForm: FormGroup;
  constructor(private toaster: ToastrService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  triggerSubmit() {
    if (!this.triggerForm) {
      console.warn('triggerForm not assigned a value');
    } else {
      if (this.triggerForm.valid) {
        this.triggerForm.ngSubmit.emit();
      }
    }
  }

  ngOnInit(): void {}

  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit(form: FormGroup) {
    let email = form.get('email').value;
    let password = form.get('password').value;
    let users = localStorage.getItem(email);
    if (users) {
      let user = JSON.parse(localStorage.getItem(email))[0].user;
      if (user.email === email && user.password === password) {
        localStorage.setItem('loggedIn', email);
        this.toaster.success('Login successfully');
        this.router.navigate(['/inbox']);
      } else {
        this.toaster.error('Email id or password is invalid');
      }
    } else {
      this.toaster.error('User does not exists');
    }
  }
}
