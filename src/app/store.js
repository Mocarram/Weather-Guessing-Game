import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/ScoreSlice";
import citiesReducer from "../features/CitiesSlice";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    scores: scoreReducer,
  },
});
