import { createSlice } from "@reduxjs/toolkit";

interface ChangeLangState {
  value: "vi" | "en";
}

const initialState: ChangeLangState = {
  value: "vi",
};

export const changeLang = createSlice({
  name: "changLang",
  initialState,
  reducers: {
    changeLgg: (state, actions) => {
      if (actions.payload === "en") {
        state.value = "en";
      } else {
        state.value = "vi";
      }
    },
  },
});

export default changeLang.reducer;
export const { changeLgg } = changeLang.actions;
