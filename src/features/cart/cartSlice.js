import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const foodIndex = state.cart.findIndex((food) => food.foodTitle === action.payload.foodTitle)
            if (foodIndex !== -1) {
                state.cart[foodIndex].quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            const foods = state.cart.filter((food) => food.foodTitle !== action.payload)
            state.cart = foods
        },


        increaseQuantity: (state, action) => {
            const foodIndex = state.cart.findIndex((food) => food.foodTitle === action.payload)
            if (foodIndex !== -1) {
                state.cart[foodIndex].quantity = state.cart[foodIndex].quantity + 1;
            }
        },
        decreaseQuantity: (state, action) => {
            console.log(action.payload)
            const foodIndex = state.cart.findIndex((food) => food.foodTitle === action.payload)
            if (foodIndex !== -1) {
                state.cart[foodIndex].quantity = state.cart[foodIndex].quantity - 1;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCart, increaseQuantity, decreaseQuantity, removeCart } = cartSlice.actions

export default cartSlice.reducer