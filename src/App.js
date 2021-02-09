import React from 'react'
import logo from './logo.svg'
import { SearchCityForm } from './features/cities/SearchCityForm'
import { RestaurantsList } from './features/restaurants/RestaurantsList'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h4 className="logo">BMOto</h4>
      </header>
      <div className="hero">
          <div className="heroText">
            <h1>Find your<br/>next meal.</h1>
            <h2>Discover the best restaurants in any city.</h2>
          </div>
          <div className="heroSearch">
            <SearchCityForm />
          </div>
        </div>  
        <RestaurantsList /> 
     </div>

  );
}

export default App;
