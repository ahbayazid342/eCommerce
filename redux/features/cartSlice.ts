import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
    },
    reduceFromCart: (state, action: PayloadAction<IProduct>) => {
      const id = action.payload.id;
      return state.filter((item) => item.id != id);
    },
  },
});

export const { addToCart, reduceFromCart } = cartSlice.actions;
export default cartSlice.reducer;
