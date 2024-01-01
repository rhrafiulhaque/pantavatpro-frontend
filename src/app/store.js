import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)

});
