import { configureStore } from "@reduxjs/toolkit";
import userInterfaceSlice from "./userInterfaceSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    ui: userInterfaceSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;
export const uiActions = userInterfaceSlice.actions;
export default store;
