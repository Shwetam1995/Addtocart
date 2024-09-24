import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearCart, decrementQuantity, incrementQuantity, loadCart } from '../../state/cart/cart.actions';
import { selectAllProducts } from '../../state/cart/cart.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  imports: [AsyncPipe, CommonModule],
})
export class CartComponent implements OnInit {

  cartItems$!: Observable<Product[]>;
  totalCartPrice: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectAllProducts);

    // Calculate total cart price
    this.cartItems$.subscribe(products => {
      this.totalCartPrice = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    });
  }

  // Increase the quantity
  incrementQuantity(id: string) {
    this.store.dispatch(incrementQuantity({ id }))
  }

  // Decrease the quantity
  decrementQuantity(id: string) {
    this.store.dispatch(decrementQuantity({ id }))
  }

  //Clear Cart
  clearCart() {
    this.store.dispatch(clearCart())
  }
}
