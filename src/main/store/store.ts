import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducer from "main/store/mainReducer";

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
