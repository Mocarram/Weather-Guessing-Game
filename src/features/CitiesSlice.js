import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCities: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCities } = citiesSlice.actions;

export const selectCities = (state) => state.cities.value;

export default citiesSlice.reducer;
