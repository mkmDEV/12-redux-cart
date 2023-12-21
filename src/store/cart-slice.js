import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQty: 0, totalAmount: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQty--;

      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
