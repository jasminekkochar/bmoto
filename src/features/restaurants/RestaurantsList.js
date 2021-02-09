import React from 'react'
import { useSelector } from 'react-redux'
import { filteredRestaurants } from './restaurantsSlice'
import defaultRestaurantImg from './defaultRestaurantImg.jpg'
import { RefineForm } from './RefineForm'
import { CitiesList } from '../cities/CitiesList'

export const RestaurantsList = () => {

  const restaurants = useSelector(filteredRestaurants)
  const restaurantStatus = useSelector(state => state.restaurants.status)
  const error = useSelector(state => state.restaurants.error)


  let renderedRestaurants
    if(restaurants.length){
      renderedRestaurants = restaurants.map((restaurant) => (
        <li className="restaurantCard" key={restaurant.restaurant.id}>
          <img src={restaurant.restaurant.thumb} alt={"Photo from "+ restaurant.restaurant.name} onError={(e)=>e.target.setAttribute("src",defaultRestaurantImg)}/>
          <div className="restaurantDetails">
            <h3>{restaurant.restaurant.name}</h3>
            <h4>{restaurant.restaurant.cuisines}</h4>
            <br/>
            <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating} / 5</p>
            <p>{restaurant.restaurant.location.address}</p>
          </div>
        </li>
      ))
    } else {
      renderedRestaurants = <li className="noMatch"><h2>Oops...no restaurants matched!</h2></li>
    }

  let content
   if (restaurantStatus === 'loading') {
     content = <div className="loader"><h2>Loading...</h2></div>
  } else if (restaurantStatus === 'succeeded') {
     content = 
     <main>
        <div className="refineSearch">
          <React.Fragment>
            <RefineForm />
            <CitiesList />
          </React.Fragment>
        </div>
        <section className="restaurants">
          <ul className="restaurantList">{renderedRestaurants}</ul>
        </section>
      </main>
   } else if (restaurantStatus === 'failed') {
     content = <div>{error}</div>
   }



  return (
    <div>
      {content}
    </div>
  )
}