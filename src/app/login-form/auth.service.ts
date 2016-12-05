import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('sGZlFlJ9MXE3ZbOpOC3UlwTDcfZEpuB3', 'danielserva.eu.auth0.com', {
   auth: { redirectUrl: 'http://localhost:4200/',
    responseType: 'token'
   }
  });
  
  
  // Configure Auth0
  // auth0 = new Auth0({
  //   domain: 'danielserva.eu.auth0.com',
  //   clientID: 'sGZlFlJ9MXE3ZbOpOC3UlwTDcfZEpuB3',
  //   responseType: 'token',
  //   callbackURL: 'http://localhost:4200',
  // });

  //Store profile object in auth class
  userProfile: Object;

  constructor() {

    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error: any, profile:any) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();

  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };
}