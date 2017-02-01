import { Component } from '@angular/core';
import { Auth } from './services/auth.service';

@Component({
  selector: 'athena-header',
  templateUrl: 'header.template.html',
  providers: [ Auth ]
})

export class HeaderComponent {
  constructor(private auth: Auth) {}
}
