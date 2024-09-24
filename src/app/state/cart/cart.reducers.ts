import { createReducer, on } from '@ngrx/store';
import { addItemToCart, clearCart, decrementQuantity, incrementQuantity, loadCart } from './cart.actions';
import { Product } from '../../model/product.model';

export interface CartState {
    products: Product[];
    itemsCount: number;
}

export const initialState: CartState = {
    products: [],
    itemsCount: 0
};

export const cartReducer = createReducer(
    initialState,
    on(addItemToCart, (state, { products }) => {
        // Add product to the cart if it's not already present, otherwise increase the quantity
        const existingProduct = state.products.find(p => p.id === products.id);
        if (existingProduct) {
            return {
                ...state,
                products: state.products.map(p =>
                    p.id === products.id ? { ...p, quantity: p.quantity + 1 } : p
                ),
                itemsCount: state.itemsCount + 1
            };
        } else {
            return {
                ...state,
                products: [...state.products, { ...products, quantity: 1 }],
                itemsCount: state.itemsCount + 1
            };
        }
    }),

    //Increment Quantity
    on(incrementQuantity, (state, { id }) => ({
        ...state,
        products: state.products.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        ),
        itemsCount: state.itemsCount + 1
    })),

    //Decremnt Quantity
    on(decrementQuantity, (state, { id }) => {
        const product = state.products.find(p => p.id === id);
        if (product && product.quantity > 1) {
            return {
                ...state,
                products: state.products.map(p =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                ),
                itemsCount: state.itemsCount - 1
            };
        } else {
            // Remove the product from the cart if its quantity is 0 or below
            return {
                ...state,
                products: state.products.filter(p => p.id !== id),
                itemsCount: state.itemsCount > 0 ? state.itemsCount - 1 : 0
            };
        }
    }),

    //Clear All Product from cart
    on(clearCart, (state) => ({
        ...state,
        products: [],
        itemsCount: 0
    })),
);
