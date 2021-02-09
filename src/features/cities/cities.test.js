import reducer, { initialState, currentCityChanged, selectAllCities, selectCurrentCity, fetchCities} from './citiesSlice';

describe('Cities slice', () => {
  describe('reducer, actions and selectors', () => {
  	it ('should update cities', () => {
  		const data = [1,2,3,4];
  		const nextState = reducer(initialState,fetchCities.fulfilled(data));
  		const rootState = {cities : nextState};
  		expect(selectAllCities(rootState)).toEqual(data)
  	})
    it('should change current City ', () => {
      const data = '5';

      const nextState = reducer(initialState, currentCityChanged(data));

      const rootState = { cities: nextState };
      expect(selectCurrentCity(rootState)).toEqual(data);
    });
  });
});

