import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports:[ProductComponent,CommonModule]
})
export class ProductsComponent implements OnInit {

  public productList = signal<Product[]>([]);
  private readonly productService = inject(ProductService);
   

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.productList.set(products);
      console.log("products",this.productList());
      
    })
  }



}
