import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core'
import {Product} from '../../../product.model'
import {CartService} from '../../../core/services/cart.service'

@Component({
    selector:'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(private cartService:CartService){
        console.log('Constructor');
    }

    // ngOnChanges(changes: SimpleChanges){
    //     console.log('ogOnChanges');
    //     console.log(changes)
    // }

    ngOnInit(){
        console.log('ngOnInit');

    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }

    addCart() {
        console.log("añadir a carrito")
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id)
    }
}