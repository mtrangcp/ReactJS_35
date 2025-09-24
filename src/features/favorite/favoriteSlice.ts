import { createSlice } from "@reduxjs/toolkit";

interface FavoriteState {
  id: number;
  name: string;
  love: boolean;
}

const initialState: FavoriteState[] = [
  {
    id: 1,
    name: "Nguyen Van A",
    love: true,
  },
  {
    id: 2,
    name: "Nguyen Van B",
    love: false,
  },
  {
    id: 3,
    name: "Nguyen Van C",
    love: false,
  },
  {
    id: 4,
    name: "Nguyen Van D",
    love: true,
  },
];

export const favoriteUser = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
});

export default favoriteUser.reducer;
