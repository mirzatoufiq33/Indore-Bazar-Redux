import { createSlice } from "@reduxjs/toolkit";

const saveCarts = JSON.parse(localStorage.getItem("cartItems")) || []

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        Carts : saveCarts,
    },
    reducers : {
        Add : (state , action) =>{
            const existItem = state.Carts.find((item) => item.id === action.payload.id)
            if(existItem){
                existItem.quantity += 1
            }else{
                state.Carts.push({...action.payload , quantity : 1})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.Carts))
        },
        Remove : (state , action) =>{
    state.Carts = state.Carts.filter(item => item.id !== action.payload)
    localStorage.setItem("cartItems", JSON.stringify(state.Carts))
        }
    },

    extraReducers : (builder) =>{}
})

export const {Add , Remove} = CartSlice.actions
export default CartSlice.reducer















