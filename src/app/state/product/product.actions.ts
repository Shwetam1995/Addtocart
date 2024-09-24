import { createAction, props } from "@ngrx/store";
import { Product } from "../../model/product.model";


export const loadProduct = createAction(
    '[Product] Load Product',
    props<{ products: Product[] }>()
);
