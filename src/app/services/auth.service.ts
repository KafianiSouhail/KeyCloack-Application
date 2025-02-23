import { inject, Injectable } from '@angular/core';
import KeyClaok, { KeycloakProfile }  from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public  readonly keyclock = inject(KeyClaok)


public async getUserProfile():Promise<KeycloakProfile>{
  return await this.keyclock.loadUserProfile()
}

public redirectToLoginPage(){
  this.keyclock.login();
}

public logout(){
  this.keyclock.logout();
}

}
