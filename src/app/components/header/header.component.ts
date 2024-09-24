import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AsyncPipe, CommonModule } from '@angular/common';
import { selectItemsCount } from '../../state/cart/cart.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  itemsCount$: Observable<number>;
  constructor(private store: Store<AppState>, private router: Router) {   // Typing the store with AppState
    this.itemsCount$ = this.store.select(selectItemsCount);

  }
  goToCart() {
    this.router.navigate(['/cart']);
  }

  // Check if the current route is the cart page
  isCartPage(): boolean {
    return this.router.url === '/cart';
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
