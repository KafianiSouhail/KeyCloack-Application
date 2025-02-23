import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { from, Observable, of } from 'rxjs';
import { KeycloakProfile } from 'keycloak-js';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  private readonly authService: AuthService = inject(AuthService);

  public  userProfile = toSignal<KeycloakProfile>(from(this.authService.getUserProfile()))
  ngOnInit() {

  }

}
