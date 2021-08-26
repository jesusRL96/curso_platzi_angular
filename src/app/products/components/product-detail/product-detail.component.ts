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

}
