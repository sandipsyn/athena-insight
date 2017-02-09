import {Component} from '@angular/core';
import {GoogleAuthService} from '../../services/auth.service';
@Component({
    selector : 'google_button',
    providers : [GoogleAuthService],
    template : `<button id="googleSignInButton" class="btn btn-lg btn-primary btn-block google-signin btn-google">
    <i class="fa fa-google" aria-hidden="true"></i>  Login with Google
    </button>`
})

export class GoogleAuth{
    constructor(private googleAuthService: GoogleAuthService) {
    }
}
