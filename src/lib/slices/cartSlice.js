import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../Is";

const initialState = {
  cartItems: getFromLocal("cart") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      setToLocal("cart", state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      setToLocal("cart", state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
