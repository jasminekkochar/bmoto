import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectAllCities, currentCityChanged } from './citiesSlice'
import { fetchRestaurants } from '../restaurants/restaurantsSlice'

export const CitiesList = () => {
  const [city, setCity] = useState('')
  const cities = useSelector(selectAllCities)

  const dispatch = useDispatch()

  const onCityChanged = (e) => setCity(e.target.value)

  const onCityClicked = async () => {
      try {
        const restaurantSearch = await dispatch(
          fetchRestaurants(city))
      } catch (err) {
        console.error(err)
      } finally{
        dispatch(currentCityChanged(city))
      }
  } 

  const cityOptions = cities.slice(1).map((city) => (
    <option key={city.id} value={city.id}>
      {city.name}
    </option>
  ))


  return (
    <section className="cities">
      <h2>Wrong City?</h2>
      <form className="search">
      <label htmlFor="citySelect">Oops! Here are some related cities:</label>
      <select id="citySelect" value={city} onChange={onCityChanged}>
        <option value="">Let's try...</option>
        {cityOptions}
      </select>
      <button type="button" onClick={onCityClicked} disabled={(!city)}>Go!</button>
      </form>
    </section>
  )
}