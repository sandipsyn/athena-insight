import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.template.html'
})

export class SignInComponent {
  userName: string;

  constructor(private router:Router) {
    if (localStorage.getItem('isAuthenticated')) {
      router.navigate(['/search']);
    }
  }
}
