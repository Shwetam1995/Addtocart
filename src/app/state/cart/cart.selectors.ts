import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';

// export const selectCartState = (state: AppState) => state.cart;
export const selectCartState = createFeatureSelector<CartState>('cart');
export const selectAllProducts = createSelector(
    selectCartState,
    (state: CartState) => state.products
);

export const selectItemsCount = createSelector(
    selectCartState,
    (state: CartState) => state.itemsCount
);

