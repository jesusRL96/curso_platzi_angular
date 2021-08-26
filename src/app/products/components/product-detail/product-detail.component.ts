import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

   }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.fetchProduct(params.id)
    })
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id)
    .subscribe(product=>{
      this.product = product
    });

  }

  createProduct(){
    const newProduct:Product = {
      id:"111",
      title:"Nuevo producto",
      image: "assets/images/banner-1.jpg",
      price: 999,
      description: "descripcion producto nuevo"
    }
    this.productsService.createProduct(newProduct)
    .subscribe(product=>{
      console.log(product);

    })
  }

  updateProduct(){
    const productUpdated:Partial<Product> = {
      title:"Nuevo titulo",
      price: 1000,
    }
    this.productsService.updateProduct("111",productUpdated)
    .subscribe(product=>{
      console.log(product);
    })
  }

  deleteProduct(){
    this.productsService.deleteProduct("111")
    .subscribe(product=>{
      console.log(product);
    })
  }

}
