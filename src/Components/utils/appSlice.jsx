import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeCart, clearCart } = appSlice.actions;
export default appSlice.reducer;
