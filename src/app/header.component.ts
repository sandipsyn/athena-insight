import { Component } from '@angular/core';
import { Auth } from './services/auth.service';

@Component({
  selector: 'athena-header',
  templateUrl: 'header.template.html',
  providers: [ Auth ]
})

export class HeaderComponent {
  // user profile object
  profile: any;

  constructor(private auth: Auth) {
    this.profile = auth.userProfile;
  }
}
