import { createSlice } from "@reduxjs/toolkit";

interface listNumberState {
  listNum: number[];
}

const initialState: listNumberState = {
  listNum: [],
};

export const listNumberSlice = createSlice({
  name: "listNumberSlide",
  initialState,
  reducers: {
    randomListNumber: (state) => {
      state.listNum = [];
      for (let i = 0; i < 5; i++) {
        const randomNumber = Math.ceil(Math.random() * 10);

        state.listNum.push(randomNumber);
      }
    },
  },
});

export default listNumberSlice.reducer;
export const { randomListNumber } = listNumberSlice.actions;
