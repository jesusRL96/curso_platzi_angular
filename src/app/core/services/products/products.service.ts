import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {Product} from '../../../product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }

  products: Product[] = [];

  getAllProducts() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products')
  }
  getProduct(id:string) {
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
  }

}
