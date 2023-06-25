/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { fetchcountry, fetchweather } from '../api/api';

const getCountries = createAsyncThunk(
  'ecoclima/getdata',
  async (_, thunkAPI) => {
    const calls = [];
    const { countries } = thunkAPI.getState();
    countries.forEach((city) => {
      calls.push(
        fetchcountry(city).then(async (coord) => {
          const { lat } = coord[0];
          const long = coord[0].lon;
          const cityData = await fetchweather(lat, long);
          return { id: uuidv4(), city, data: cityData.list[0] };
        }),
      );
    });
    const countriesData = await Promise.all(calls);
    return countriesData;
  },
);

const initialState = {
  countries: [
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
  countriesData: [],
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.countriesData = action.payload;
    });
  },
});

export default countrySlice.reducer;
export const { getIndexes } = countrySlice.actions;
export { getCountries };
