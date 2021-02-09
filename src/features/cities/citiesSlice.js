import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
  cities:[],
  currentCity:'',
  status:'idle',
  error: null
}

export const fetchCities = createAsyncThunk('cities/fetchCities', async (city) => {
  const response = await client.get(`/cities?q=${city}`)
  return response.location_suggestions
})

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    currentCityChanged(state, action) {
      const city = action.payload
      state.currentCity = city
    }
  },
  extraReducers:{
    [fetchCities.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCities.fulfilled]: (state,action) => {
      state.status = 'succeeded'
      state.cities.splice(0, state.cities.length, ...action.payload)
      state.currentCity = state.cities[0].id
    },
    [fetchCities.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { currentCityChanged } = citiesSlice.actions

export default citiesSlice.reducer


export const selectAllCities = state => state.cities.cities
export const selectCurrentCity = state => state.cities.currentCity
