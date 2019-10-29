import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  loggedIn = false;

  constructor() { }

  authenticate(userName: string, password: string) {
    this.loggedIn = true;
    return {
      customer : {
        name : {
          firstName : 'Selva',
          lastName : 'Soorian'
        }
      },
      isLoggedIn : true
    };
  }

  isAuthorized() {
    const promise = new Promise( ( resolve, reject ) => {
      setTimeout(() => {
        if ( this.loggedIn ) {
          resolve(this.loggedIn);
        } else {
          resolve(this.loggedIn)
        }
      }, 2000);
    });
    return promise;
  }
}
