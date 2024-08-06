import { configureStore } from "@reduxjs/toolkit";
import product_slice from "../slices/product_slice";
import cart_slice from "../slices/cart_slice";

export const store=configureStore({
reducer:{
products:product_slice,
cart:cart_slice
}


})