import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@store/cart-slice';
import uiSlice from '@store/ui-slice';

const store = configureStore({
  reducer: { cart: cartSlice, ui: uiSlice },
});

export default store;
