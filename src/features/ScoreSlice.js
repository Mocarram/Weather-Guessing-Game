import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  point: 0,
};

export const scoreSlice = createSlice({
  name: "scores",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addScore: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    resetScore: (state) => {
      state.value = [];
    },
    addPoint: (state) => {
      state.point += 1;
    },
    resetPoint: (state) => {
      state.point = 0;
    },
  },
});

export const { addScore, resetScore, addPoint, resetPoint } =
  scoreSlice.actions;

export const selectScores = (state) => state.scores.value;
export const selectPoints = (state) => state.scores.point;

export default scoreSlice.reducer;
