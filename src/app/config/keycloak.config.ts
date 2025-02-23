import { environment } from "../../environments/environment"

 const  config ={
      url: environment.keycloak.authority,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId,
    }
const initOptions = {
      enableLogging: true,
      checkLoginIframe: true,
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
      window.location.origin + '/',
      redirectUri: environment.keycloak.redirectUri,
}

export const loadKeycloakConfig = ():any => {
    return ({
        config,
        initOptions,
    })


}