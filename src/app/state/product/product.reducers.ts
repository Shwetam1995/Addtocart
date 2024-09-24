import { createReducer, on } from "@ngrx/store";
import { Product } from "../../model/product.model";
import { loadProduct } from "./product.actions";

export interface ProductState {
    products: Product[];
    filteredProducts: Product[];
}

export const initialState: ProductState = {
    products: [],
    filteredProducts: []
};

export const productReducer = createReducer(
    initialState,
    on(loadProduct, (state, { products }) => ({
        ...state,
        products: [...products]
    })),
);
