import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CityState = {
  cities: string[];
  isLoading: boolean;
};

const initialState: CityState = {
  cities: ["Ankara", "İzmir", "Brugge", "İstanbul"],
  isLoading: false,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citySlice.actions;

export default citySlice.reducer;
