import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private readonly httpClient = inject(HttpClient);

public getProducts():Observable<Product[]>{
  return this.httpClient.get<Product[]>("https://api.escuelajs.co/api/v1/products")
}

}
