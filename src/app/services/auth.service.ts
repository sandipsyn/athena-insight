import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router }          from '@angular/router';
import { myConfig }        from './../configs/auth.config';

// Avoid name not found warnings
// TODO - Need to find out which version of library to use for login and gettig
// user profile
declare var Auth0: any;
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  //Store profile object in auth class
  userProfile: any;

  // Configure Auth0
  options = {
    auth: {
      responseType: 'id_token',
      params: { scope: 'openid name email' }
    }
  };

  auth0 = new Auth0({
    domain: myConfig.domain,
    clientID: myConfig.clientID,
    callbackOnLocationHash: true,
    callbackURL: myConfig.callbackURL,
    options: this.options
  });

  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
    additionalSignUpFields: [{
      name: "address",                              // required
      placeholder: "enter your address",            // required
      icon: "https://example.com/address_icon.png", // optional
      validator: function(value) {                  // optional
        // only accept addresses with more than 10 chars
        return value.length > 10;
      }
    }]
  });

  constructor(private router: Router) {
    var result = this.auth0.parseHash(window.location.hash);

    if (result && result.idToken) {
      localStorage.setItem('id_token', result.idToken);
      // this.router.navigate(['/home']);
    } else if (result && result.error) {
      console.log('error: ' + result.error);
    }

    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        this.router.navigate(['/']);
      });
    });

  }

  public signUp(username, password) {
    this.auth0.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public login(username, password) {
    this.auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public googleLogin() {
    this.auth0.login({
      connection: 'google-oauth2'
    }, function(err) {
      if (err) alert("something went wrong: " + err.message);
    });
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();

    // return localStorage value of profile
    // return localStorage.getItem('profile');
  };

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    this.router.navigate(['/']);
  };
}
