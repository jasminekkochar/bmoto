import {createSlice, createAsyncThunk, createSelector} from '@reduxjs/toolkit'
import {client} from '../../api/client'


const initialState = {
  restaurants:[],
  refineTerms:'',
  status: 'idle',
  error: null
}

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async (cityId) => { 
  const response = await client.get(`/search?entity_id=${cityId}&entity_type=city`)
  return response.restaurants
})

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    refineTermsChanged(state,action){
      state.refineTerms = action.payload
    }
  },
  extraReducers:{
    [fetchRestaurants.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchRestaurants.fulfilled]: (state,action) => {
      state.status = 'succeeded'
      state.restaurants.splice(0,state.restaurants.length,...action.payload)
      state.refineTerms=''
    },
    [fetchRestaurants.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { refineTermsChanged } = restaurantsSlice.actions

export default restaurantsSlice.reducer

export  const filteredRestaurants = (state => {
    const refineTerms = state.restaurants.refineTerms.toLowerCase()
    if(refineTerms){
      return state.restaurants.restaurants.filter( restaurant => {
          return restaurant.restaurant.name.toLowerCase().includes(refineTerms) || 
            restaurant.restaurant.location.address.toLowerCase().includes(refineTerms) || 
            restaurant.restaurant.cuisines.toLowerCase().includes(refineTerms)
        })
    } else {
      return state.restaurants.restaurants
    }
  })