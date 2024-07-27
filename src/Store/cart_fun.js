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
        state.carts[existingItemIndex].quantity = action.payload.quantity;
        state.carts[existingItemIndex].subtotal = state.carts[existingItemIndex].price * state.carts[existingItemIndex].quantity;
      } else {
        const cart = {
          id: action.payload.id,
          price: action.payload.price,
          quantity: action.payload.quantity,
          image: action.payload.image,
          subtotal: action.payload.price * action.payload.quantity
        };
        state.carts.push(cart);
      }
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);
    }
  }
});

export const { updateCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
