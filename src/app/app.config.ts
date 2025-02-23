import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideKeycloak } from 'keycloak-angular';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideAnimationsAsync(), provideKeycloak({
    config: {
      url: environment.keycloak.authority,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId,
    },
    initOptions: {
      enableLogging: true,
      checkLoginIframe: true,
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
      window.location.origin + '/',
      redirectUri: environment.keycloak.redirectUri,
    },
  }),  ]
};