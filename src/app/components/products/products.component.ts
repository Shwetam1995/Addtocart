import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MOCK_PRODUCTS, Product } from '../../model/product.model';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { loadProduct } from '../../state/product/product.actions';
import { selectAllProducts } from '../../state/product/product.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import { addItemToCart } from '../../state/cart/cart.actions';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productItems$!: Observable<Product[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProduct({ products: MOCK_PRODUCTS }));
    this.productItems$ = this.store.select(selectAllProducts);
  }

  addItem(products: Product) {
    this.store.dispatch(addItemToCart({ products }));
  }
}
