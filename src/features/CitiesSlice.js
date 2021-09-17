import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCity: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    resetCities: (state) => {
      state.value = [];
    },
  },
});

export const { addCity, resetCities } = citiesSlice.actions;

export const selectCities = (state) => state.cities.value;

export default citiesSlice.reducer;
