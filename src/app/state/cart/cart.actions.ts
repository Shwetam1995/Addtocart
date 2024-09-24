import { createAction, props } from '@ngrx/store';
import { Product } from '../../model/product.model';

export const loadCart = createAction(
    '[Cart] Load Cart',
    props<{ products: Product[] }>()
);

export const addItemToCart = createAction(
    '[Cart] Add Item',
    props<{ products: Product }>()
);

export const incrementQuantity = createAction(
    '[Cart] increament Quantity',
    props<{ id: string }>()
);
export const decrementQuantity = createAction(
    '[Cart] decrement Quantity',
    props<{ id: string }>()
);

export const removeItemFromCart = createAction(
    '[Cart] Remove Item',
    props<{ productId: string }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const addCoupon = createAction('[Cart] Add Coupons');
