import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authService";

const userExist = JSON.parse( localStorage.getItem('user'))

const authslice = createSlice ({
    name : 'auth',
    initialState : {
        user : userExist || null,
        isLoading : false,
        issuccess : false,
        isError : false,
        massage : ""
    },
    reducers : {} ,
    extraReducers : (builder) => {

    builder
    .addCase(registerUser.pending , (state , action) => { 
      state.isLoading = true
      state.issuccess = false
      state.isError = false 

    })
    .addCase(registerUser.fulfilled , (state , action) => { 
      state.isLoading = false
      state.issuccess = true
      state.isError = false 
      state.user = action.payload


    })

    .addCase(registerUser.rejected , (state , action) => { 
      state.isLoading = false
      state.issuccess = false
      state.isError = true 
      state.massage = action.payload

    })



  
    .addCase(loginUser.pending , (state , action) => { 
      state.isLoading = true
      state.issuccess = false
      state.isError = false 

    })
    .addCase(loginUser.fulfilled , (state , action) => { 
      state.isLoading = false
      state.issuccess = true
      state.isError = false 
      state.user = action.payload


    })

    .addCase(loginUser.rejected , (state , action) => { 
      state.isLoading = false
      state.issuccess = false
      state.isError = true 
      state.massage = action.payload

    })

    

    .addCase(logOutuser.fulfilled , (state , action) => { 
      state.isLoading = false;
      state.issuccess = false;
      state.isError = false ;
      state.massage = "";
      state.user = null;

    })
    },

});


export default authslice.reducer;


 // Register user

 export const registerUser = createAsyncThunk("AUTH/REGISTER", async(fromData , thunkAPI)=>{


  try {
    return await register (fromData);  
  } catch (error) {

    const massage = error.response.data.massage;
    return thunkAPI.rejectWithValue(massage);

    
  }
  
 })

  // Login user

  export const loginUser = createAsyncThunk("AUTH/LOGIN ", async(fromData , thunkAPI)=>{


    try {
      return await login (fromData);  
    } catch (error) {
  
      const massage = error.response.data.massage;
      return thunkAPI.rejectWithValue(massage);
  
      
    }
    
   })
  



 // LogOut


 export const logOutuser = createAsyncThunk("AUTH/LOGOUT", async () => {
  localStorage.removeItem("user")

 }
)

