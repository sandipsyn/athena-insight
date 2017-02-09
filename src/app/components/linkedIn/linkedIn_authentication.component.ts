import {Component} from '@angular/core';
import {GoogleAuthService} from '../../services/auth.service';

declare var IN : any;

@Component({
  selector : 'linkedIn_button',
  providers : [GoogleAuthService],
  template : `<button class="btn btn-lg btn-primary btn-block linkedIn-signin btn-linkedin" (click)="googleAuthService.linkedInLogin()">
    <i class="fa fa-linkedin" aria-hidden="true"></i>  Login with LinkedIn
  </button>`
})

export class LinkedInAuth{

  constructor( private googleAuthService: GoogleAuthService){

  }
}
