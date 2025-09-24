import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  light: boolean;
}

const initialState: ThemeState = {
  light: true,
};

export const changeThemeSlice = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.light = !state.light;
    },
  },
});

export default changeThemeSlice.reducer;
export const { changeTheme } = changeThemeSlice.actions;
