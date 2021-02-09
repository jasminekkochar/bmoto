# Technical Questions

Below are answers to the technical questions asked:

1. I spent an evening on the app (approximately 5 hrs?). The app fulfills the user story, but is a little hacky. I'd probably want to spend more time with the UI/UX (for ex. introduce routing and conditional renders instead of nesting the refining components), possibly even re-thinking the UX flow to seperate the city choice and the restaurant call into two separate flow steps. I'd also probably mock the API for testing, and introduce call status conditional rendering for the Cities api call. 

2. Not sure if it counts as a feature, but the redux toolkit has been a lifesaver. I find that createSlice especially really does cut down on boilerplate code.

```
const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    currentCityChanged(state, action) {
      const city = action.payload
      state.currentCity = city
    }
  }, ...

  ```

3. Generally when tracking performance issues, I'd start with tracing the application flow to find the bottleneck (either using logs or a tracing console). I'd be looking for API errors, unneccessary re-rendering, multiple calls to the same API endpoint, cumbersome logic, etc. 

4. I think my greatest issue with API was the need to make two calls to get restaurants for each city (the first to get the city id, the second to use it to get restaurants). It makes sense to some degree, given the variety location entities they're working with - but it wasn't ideal for this purpose. 

5. ```
	{
	  "name": "Jasmine Kochar",
	  "location": "Toronto",
	  "frontEndOrBackend":"frontEnd",
	  "favourites": {
	  	"food": ["cherries","mangoes","chocolate covered pretzels"],
	  	"books": ["A Little Life", "Anne of Green Gables", "Name Of The Wind"],
	  	"jsLibrary": "GSAP",
	  	"thingToDoOffScreen": "bake"
	  },
	  "lastPandemicBuild": "http://f1shb0wl.herokuapp.com/"
 	}
 	```
