import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { myValidators } from '../../../utils/validators';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product)=>{
        this.form.patchValue(product)
      })

    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id:['', [Validators.required]],
      title:['', [Validators.required]],
      price:[0, [Validators.required, myValidators.isPriceValid]],
      image:[''],
      description:['', [Validators.required]]
    });
  }

  saveProduct(event:Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id,product)
      .subscribe((newProduct)=>{
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField(){
    return this.form.get('price');
  }

}
