import { Component } from '@angular/core';
import { Auth } from './login-form/auth.service';

@Component({
  selector: 'fbfb-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ Auth ]
})
export class AppComponent {
  title = 'Faz bem fazer o bem';
  constructor(private auth: Auth) {}
}
