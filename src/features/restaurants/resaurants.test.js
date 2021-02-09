import reducer, { initialState, refineTermsChanged, filteredRestaurants, fetchRestaurants} from './restaurantsSlice';

describe('Restaurants slice', () => {
  describe('reducer, actions and selectors', () => {
  	it ('should update restaurants', () => {
  		const data = [1,2,3,4];
  		const nextState = reducer(initialState,fetchRestaurants.fulfilled(data));
  		const rootState = {restaurants : nextState};
  		expect(rootState.restaurants.restaurants).toEqual(data)
  	})
    it('should change refine terms', () => {
      const data = 'term';

      const nextState = reducer(initialState, refineTermsChanged(data));

      const rootState = { restaurants: nextState };
      expect(rootState.restaurants.refineTerms).toEqual(data);
    });
  });
});

