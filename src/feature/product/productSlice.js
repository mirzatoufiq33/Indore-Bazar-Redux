import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchproduct, fetchproducts } from "./productService";

const productslice = createSlice({
    name : 'Products',
    initialState : {
        products : [],
        Product : {},
        isLoading :false,
        isSuccess : false ,
        isError : false,
        message : ""


    },
    reducers : {},
    extraReducers : (buillder) => {
        buillder        
        .addCase(getproducts. pending , (state , action ) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError =false
        })
        .addCase(getproducts. fulfilled, (state , action ) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.products =action.payload
       })
        .addCase(getproducts.rejected, (state , action ) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError =true
        })

        .addCase(getproduct. pending , (state , action ) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError =false
        })
        .addCase(getproduct. fulfilled, (state , action ) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.Product = action.payload
       })
        .addCase(getproduct.rejected, (state , action ) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError =true
        })

    },
 
});


export default productslice.reducer;


// Get products
export const getproducts = createAsyncThunk("FETCH/PRODUCTS" , async() =>{
try {
   return await fetchproducts();
} catch (error) {   
    console.log(error);
}
});


// Get Single Product\
export const getproduct = createAsyncThunk("FETCH/PRODUCT", async (id) =>{
    try {
        return await fetchproduct(id)
    } catch (error) {
        console.log(error)
    }
})