import GemReducer from './gemReducer';
import RootReducer from './rootReducer';
import { createStore } from 'redux';


const defaultState = { gem: {}, errors: null };
const gem = {
					name: 'gem', 
					info: 'I am gem', 
					dependencies: ['other-gem1', 'other-gem2']
				}; 

describe.only('Reducers', () => {
  
	describe('GemReducer', () => {

		let oldState = { 
			gem: {name: 'old-gem', info: 'old-info', dependencies: [] }, errors: null 
		};
    
		test('exports an function', () => {
      expect(typeof GemReducer).toEqual('function');
    });

    test('should initialize with an empty object as the default state', () => {
      expect(GemReducer(undefined, {})).toEqual(defaultState);
    });

    test('should return the previous state if an action is not matched', () => {
      const newState = GemReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('Handling the RECEIVE_GEM action', () => {
      let action, gem;

      beforeEach(() => {
        gem = {
					name: 'gem', 
					info: 'I am gem', 
					dependencies: ['other-gem1', 'other-gem2']
				};
        action = { type: 'RECEIVE_GEM', gem };
      });

      test('should replace the state with the action\'s gem', () => {
        let state = GemReducer(undefined, action);
        expect(state).toEqual({ gem, errors: null });
      });

      test('should not modify the old state', () => {
        GemReducer(oldState, action);
        expect(oldState).toEqual({ gem: {name: 'old-gem', info: 'old-info', dependencies: [] }, errors: null });
      });
		});

    describe('Handling the RECEIVE_ERROR action', () => {
      let action, errors;

			beforeEach(() => {
				errors = ["Gem not found"];
				action = { type: 'RECEIVE_ERRORS', errors };
			});

			test('should return the error', () => {
				let state = GemReducer(defaultState, action);
				expect(state.errors).toEqual(errors);
			});
		});

    describe('Handling the CLEAR_ERRORS action', () => {
      let action, state;

			beforeEach(() => {
				state = { gem: {}, errors: { errors: ["Gem not found"] } };
				action = { type: 'CLEAR_ERRORS', errors: null };
			});

			test('should remove errors from the state', () => {
				let newState = GemReducer(state, action);
				expect(newState).toEqual(defaultState);
			});
		});
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    test('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    test('includes the GemReducer under the key `gem`', () => {
      const action = {type: 'RECEIVE_GEM', gem };
      testStore.dispatch(action);

      expect(testStore.getState().gem).toEqual(GemReducer({ gem, errors: null }, action));
    });
  });
});