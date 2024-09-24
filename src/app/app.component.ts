import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, AsyncPipe, CommonModule, ProductsComponent, HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-cart';
}

