import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product.model';
import {ProductsService} from '../../../core/services/products/products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  products: Product[] = [];


  clickProduct(id: number){
    console.log("producto", id);
  }

  fetchProducts(){
    console.log('products');

    this.productsService.getAllProducts().subscribe(products=>{
      console.log(products);
      this.products = products
    })
  }

}
