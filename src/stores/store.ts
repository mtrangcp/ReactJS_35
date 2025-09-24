import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import listNumberSlice from "../features/listNumber/listNumberSlice";
import changeThemeSlice from "../features/changeTheme/changThemeSlice";
import changeModeSlice from "../features/changeMode/changeModeSlice";
import changeMenuSlice from "../features/changeMenu/changeMenu";
import ChangeLangSlice from "../features/changeLanguage/changeLang";
import favoriteUser from "../features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listNUmber: listNumberSlice,
    changeTheme: changeThemeSlice,
    changeMode: changeModeSlice,
    changeMenu: changeMenuSlice,
    changeLang: ChangeLangSlice,
    favorite: favoriteUser,
  },
});

// dinh nghia type cho all state
export type RootState = ReturnType<typeof store.getState>;

// dinh nghia type cho dispatch
export type AppDispath = typeof store.dispatch;
