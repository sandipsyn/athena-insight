import { Component } from '@angular/core';
import { Auth } from './../../services/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.template.html'
})

export class SignInComponent {
  userName: string;

  constructor(private auth: Auth) {
    this.userName = localStorage.getItem('userName');
    console.log(auth);
  }
}
