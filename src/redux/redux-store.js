import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/board-reducer";

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});
