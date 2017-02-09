
import {Injectable, NgZone} from '@angular/core';
import { Router } from '@angular/router';

declare var gapi: any;
var googleAuth:any;
var initAPI:any;
var userName:any;
declare var IN : any;

@Injectable()
export class GoogleAuthService{
    constructor(private _ngZone: NgZone, private router: Router) {
        this.OnLinkedInFrameworkLoad();
        initAPI = new Promise(
            (resolve) => {
                window['onLoadGoogleAPI'] =
                    () => {
                        resolve(gapi);
                    };
                this.init();
            }
        )
        initAPI.then(
            (gapi) => {
                gapi.load('auth2', () =>
                {
                    var auth2 = gapi.auth2.init({
                        client_id: '933230715671-ovgiao0ufcmkbkd57nm8m3tlk2jnl8ns.apps.googleusercontent.com',
                        cookiepolicy: 'single_host_origin',
                        scope: 'profile email'
                    });
                    auth2.attachClickHandler(document.getElementById('googleSignInButton'), {},
                        this.onSuccess,
                        this.onFailure
                    );
                });
            }
        )

    }

    init(){
        let meta = document.createElement('meta');
        meta.name = 'google-signin-client_id';
        meta.content = '933230715671-ovgiao0ufcmkbkd57nm8m3tlk2jnl8ns.apps.googleusercontent.com';
        document.getElementsByTagName('head')[0].appendChild(meta);
        let node = document.createElement('script');
        node.src = 'https://apis.google.com/js/platform.js?onload=onLoadGoogleAPI';
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);
    }

    onSuccess = (user) => {
        this._ngZone.run(
            () => {
                if(user.getAuthResponse().scope ) {
                    this.router.navigate(['/search']);
                } else {
                    //write somethind
                }
            }
        );
    };

    onFailure = (error) => {
        this._ngZone.run(() => {
            //display error msg
        });
    };

    isAuthenticated = () =>  {
        var auth2 = gapi.auth2.getAuthInstance();
        console.log(auth2.isSignedIn.get() || IN.User.isAuthorized());
        return auth2.isSignedIn.get() || IN.User.isAuthorized();
    };

    getUserName = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            console.log('Full Name: ' + profile.getName())
            return profile.getName();
        } else return userName;
    };

    logout = () => {
        var auth2 = gapi.auth2.getAuthInstance();

        auth2.signOut().then(function () {
            console.log('User signed out.');
        });

        IN.User.logout();
    };

    linkedInLogin = () => {
        IN.User.authorize(this.gotoSearchPage);
    };

    gotoSearchPage = () => {
        this.router.navigate(['/search']);
        console.log('user loged in');
        this.getProfileData();
    };

    OnLinkedInFrameworkLoad = () => {
        IN.Event.on(IN, "auth", this.OnLinkedInAuth);
    };

    OnLinkedInAuth = () => {
        IN.API.Profile("me").result(result => this.ShowProfileData);
    };

    ShowProfileData = (profiles) => {
        console.log(profiles);
        this.router.navigate(['/search']);
    };

    success = (data) => {
        userName = data.firstName + ' ' + data.lastName;
        console.log(userName);
    };

    // Handle an error response from the API call
    onError = (error) =>{
    console.log(error);
    };

    // Use the API call wrapper to request the member's basic profile data
    getProfileData = () => {
    IN.API.Raw("/people/~").result(this.success).error(this.onError);
    };

}
