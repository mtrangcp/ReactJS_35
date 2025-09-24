import { createSlice } from "@reduxjs/toolkit";

interface ChangeMenuState {
  collapse: boolean;
}

const initialState: ChangeMenuState = {
  collapse: false,
};

export const changeMenu = createSlice({
  name: "changeMenu",
  initialState,
  reducers: {
    changeStatus: (state) => {
      state.collapse = !state.collapse;
    },
  },
});

export default changeMenu.reducer;
export const { changeStatus } = changeMenu.actions;
