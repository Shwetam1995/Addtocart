import { CartState } from "./state/cart/cart.reducers";
import { ProductState } from "./state/product/product.reducers";

export interface AppState {
    cart: CartState,
    product: ProductState
}
