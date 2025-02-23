import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  providers:[ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 private readonly authService = inject(AuthService)

 public login(){
  !this.authService.keyclock.authenticated && this.authService.redirectToLoginPage();
 }
  
}
