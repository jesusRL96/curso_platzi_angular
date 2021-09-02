import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { myValidators } from '../../../utils/validators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  uploadFile(event){
    const file = event.target.files[0];
    console.log(file);
    const filePath = 'images/nombre_imagen';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        this.image$=ref.getDownloadURL()
        this.image$.subscribe((url)=>{
          console.log(url);
          this.form.get('image').setValue(url)
        });
      })
    )
    .subscribe();
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
      this.productsService.createProduct(product)
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
