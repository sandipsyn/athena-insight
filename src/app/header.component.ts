import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GoogleAuthService} from './services/auth.service';

declare var gapi: any;
@Component({
  selector: 'athena-header',
  templateUrl: 'header.template.html',
  providers: [ GoogleAuthService ]
})

export class HeaderComponent {
  // user profile object
  profile: any;
  isSignedIn:any;

  constructor(private router: Router, private googleAuthService: GoogleAuthService) {
      setInterval(() => {
            this.profile = googleAuthService.getUserName();
            this.isSignedIn = googleAuthService.isAuthenticated();

    }, 100);
  }

  logout():void {
      this.googleAuthService.logout();
      this.router.navigate(['/']);
   }
}
