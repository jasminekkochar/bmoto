import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities/citiesSlice'
import restaurantsReducer from '../features/restaurants/restaurantsSlice';


export default configureStore({
  reducer: {
  	cities: citiesReducer,
    restaurants: restaurantsReducer
  },
});
