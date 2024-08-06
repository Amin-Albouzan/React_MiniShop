import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'product_slice/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:7000/products');
    const data = await response.json();
   
    return data;
  }
)











export const product_slice=createSlice({
    initialState:[],
    name:'product_slice',
    reducers:{},
    extraReducers:(builder)=>{

    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
    return action.payload
    })
    
    }
    
    
    })


    export const {}=product_slice.actions;
    export default product_slice.reducer;

