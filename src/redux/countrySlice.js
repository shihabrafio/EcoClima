/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { fetchcountry, fetchweather } from '../api/api';

const getCitiesData = createAsyncThunk(
  'ecoclima/getdata',
  async (_, thunkAPI) => {
    const calls = [];
    const { cities } = thunkAPI.getState();
    cities.forEach((city) => {
      calls.push(
        fetchcountry(city).then(async (coord) => {
          const { lat } = coord[0];
          const long = coord[0].lon;
          const cityData = await fetchweather(lat, long);
          return { id: uuidv4(), city, data: cityData.list[0] };
        }),
      );
    });
    const citiesData = await Promise.all(calls).then((res) => res);
    return citiesData;
  },
);

const initialState = {
  cities: [
    'Bangladesh',
    'India',
    'Pakistan',
    'Malaysia',
    'China',
    'Sri Lanka',
    'Nepal',
    'Iraq',
    'Iran',
    'Cambodia',
    'Vietnam',
    'Myanmar',
    'Philippines',
    'Indonesia',
    'Thailand',
    'Japan',
    'Saudi Arabia',
  ],
  citiesData: [],
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCitiesData.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.citiesData = action.payload;
    });
  },
});

export default countrySlice.reducer;
export const { getIndexes } = countrySlice.actions;
export { getCitiesData };
