import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Auth } from './../../services/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.template.html'
})

export class SignInComponent {
  userName: string;

  constructor(private router:Router) {
//    this.userName = localStorage.getItem('userName');
  }
}
