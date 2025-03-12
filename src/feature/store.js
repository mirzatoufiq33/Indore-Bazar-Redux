import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import productReducer from "./product/productSlice"
import Cart from "./Cart/CartSlice"


const  store = configureStore({
    reducer : {
        auth : authReducer,
        Products: productReducer,
        Cart : Cart,

    }
})

export default store;