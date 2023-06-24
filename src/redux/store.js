import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './countrySlice';

const store = configureStore({
  reducer: CountryReducer,
});

export default store;
