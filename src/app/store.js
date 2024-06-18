import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/Sliderslice";
import productsReducer from "../features/Productsslice"
import cartReducer from "../features/Cartslice";
import authReducer from "../features/Authslice";

export const store = configureStore({
    reducer : {
        slider : sliderReducer,
        products : productsReducer,
        cart : cartReducer,
        auth : authReducer,
    }
})