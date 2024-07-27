import { createSlice } from '@reduxjs/toolkit';

const initialState = { carts: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const existingItemIndex = state.carts.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.carts[existingItemIndex].quantity += 1;
        state.carts[existingItemIndex].subtotal = state.carts[existingItemIndex].price * state.carts[existingItemIndex].quantity;
      } else {
        const cart = {
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          image: action.payload.image,
          subtotal: action.payload.price
        };
        state.carts.push(cart);
      }
    }
  }
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
