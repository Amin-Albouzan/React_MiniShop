import { createSlice } from "@reduxjs/toolkit";

export const cart_slice=createSlice({
initialState:[],
name:"cart_slice",
reducers:{

AddToCart:(state,action)=>{

    
    const findProduct=state.find((product)=>product.id===action.payload.id);
    if(findProduct)
    {
        
        findProduct.quantity+=1;
    }
    else
    {
        
        const productClone={...action.payload,quantity:1};
        state.push(productClone);
    }





},
DeleteThisCart:(state,action)=>{

const cards={...action.payload};
return state.filter((product)=>product.id!=action.payload.id);

},
DeleteAll:(state,action)=>{

    return state=[];
}


}





})
export const {AddToCart,DeleteThisCart,DeleteAll}=cart_slice.actions
export default cart_slice.reducer;