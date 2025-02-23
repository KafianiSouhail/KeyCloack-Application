import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthGuardData, createAuthGuard } from "keycloak-angular";
import { MyRoutes } from "../models/my-routes.enum";
import { AuthService } from "../services/auth.service";

const isAccessAllowed =  async(route:ActivatedRouteSnapshot, _:RouterStateSnapshot, authData:AuthGuardData):Promise<boolean | UrlTree> => {
    const {authenticated, grantedRoles} = authData;
    const requiredRole = route?.data['role'];
    // const authService = inject(AuthService)
    // authService.logout();

    if(!requiredRole && authenticated){
        return true;;
    }

    if(authenticated && hasRequiredRoles(grantedRoles,requiredRole)){
        return true;
    }

    const router = inject(Router)
    return router.parseUrl(`/${MyRoutes.Forbidden}`)
}

const hasRequiredRoles = (grantedRoles:any,role: string):boolean => {
    return Object.values(grantedRoles).some((roles:any) => roles.incudes(role))
}

export const authGuard = createAuthGuard<CanActivateFn>(isAccessAllowed)