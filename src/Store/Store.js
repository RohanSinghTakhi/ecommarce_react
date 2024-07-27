import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./redux"; // Assuming you exported the default 
import cartReducer from "./cart_fun.js"

export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: cartReducer
  }
});
