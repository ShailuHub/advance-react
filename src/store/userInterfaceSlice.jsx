import { createSlice } from "@reduxjs/toolkit";

const initialUserInterfaceState = {
  cartvisible: false,
};

const userInterfaceSlice = createSlice({
  name: "ui",
  initialState: initialUserInterfaceState,
  reducers: {
    toggle(state) {
      state.cartvisible = !state.cartvisible;
    },
  },
});

export default userInterfaceSlice;
