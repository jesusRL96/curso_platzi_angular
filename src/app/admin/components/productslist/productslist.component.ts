import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../core/services/products/products.service'

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {
  products = [];
  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    console.log('products');

    this.productsService.getAllProducts().subscribe(products=>{
      console.log(products);
      this.products = products
    })
  }
  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(product=>{
      this.fetchProducts();
    })
  }

}
