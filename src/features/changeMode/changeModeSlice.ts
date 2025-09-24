import { createSlice } from "@reduxjs/toolkit";

interface ChangeModeState {
  modeColumn: boolean;
}

const initialState: ChangeModeState = {
  modeColumn: true,
};

export const changeModeSlice = createSlice({
  name: "changeMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.modeColumn = !state.modeColumn;
    },
  },
});

export default changeModeSlice.reducer;
export const { changeMode } = changeModeSlice.actions;
