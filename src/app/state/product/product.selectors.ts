import { createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducers";
import { AppState } from "../../app.state";

export const selectProductState = (state: AppState) => state.product;

export const selectAllProducts = createSelector(
    selectProductState,
    (state: ProductState) => state.products
);


