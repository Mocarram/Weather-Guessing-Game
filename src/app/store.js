import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/ScoreSlice";

export const store = configureStore({
  reducer: {
    scores: scoreReducer,
  },
});
