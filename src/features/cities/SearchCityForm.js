import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'


import { fetchCities,  } from './citiesSlice'
import { fetchRestaurants } from '../restaurants/restaurantsSlice'

export const SearchCityForm = () => {
	const [city, setCity] = useState('')
  const onCityChanged = e => setCity(e.target.value)

	const dispatch = useDispatch()

  const onSearchClicked = async () => {
      try {
        const citySearch = await dispatch(
          fetchCities(city)
        )
        let cities = unwrapResult(citySearch)
        let currCity = cities[0]
        try{
          const restaurantSearch = await dispatch(
          fetchRestaurants(currCity.id)
          )
        } catch (err) {
          console.error(err)
        }
      } catch (err) {
        console.error(err)
      }
  }

	return (
		<section>
      	<h2>Search by City</h2>
      	<form className="search">
        	<label htmlFor="cityInput">Where are you eating?</label>
        	<input
          		type="text"
          		id="cityInput"
          		name="cityInput"
          		value={city}
          		onChange={onCityChanged}
        	/>
        	<button type="button" onClick={onSearchClicked} disabled={(!city)}>Let's Eat!</button>
      </form>
    </section>
	)
}
