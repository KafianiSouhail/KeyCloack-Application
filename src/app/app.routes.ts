import { Routes } from '@angular/router';
import { MyRoutes } from './models/my-routes.enum';
import { ProductComponent } from './product/product.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth-guard';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:"", pathMatch:'full', redirectTo:"/"+MyRoutes.Products},
    {path:MyRoutes.UserInfo,component:UserInfoComponent, canActivate:[authGuard]},
    {path:MyRoutes.Forbidden, component:ForbiddenComponent},
    {path:MyRoutes.NotFound, component:NotFoundComponent},
    {path:MyRoutes.Products, component:ProductsComponent},


];
