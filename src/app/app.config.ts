import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducers';
import { productReducer } from './state/product/product.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(),
  provideState('cart', cartReducer),
  provideState('product', productReducer)
  ]
};
