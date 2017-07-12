
jest.mock('../reducers/rootReducer', () => {
  return jest.fn((oldState, action) => ({
    gem: {
			gem: { 
				name: 'gem', 
				info: 'I am gem', 
				dependencies: ['other-gem1', 	'other-gem2']
			},
			errors: []
		}
  }));
});

import RootReducer from '../reducers/rootReducer';
import configureStore from './store';

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  afterEach(() => {
    RootReducer.mockClear();
  });

  test('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  });

  test('the exported function should create a store when invoked', () => {
    expect(store.getState()).toEqual({
      gem: {
				gem: {
					name: 'gem', 
					info: 'I am gem', 
					dependencies: ['other-gem1', 'other-gem2']
				},
				errors: []
			}
    });
  });

  test('passes dispatched objects the the reducer', () => {
    store.dispatch({ type: "TEST" });

    expect(RootReducer).toHaveBeenCalledTimes(2);
  });

  test('creates a store with thunk middleware', () => {
    store.dispatch(dispatch => {});

    expect(RootReducer).toHaveBeenCalledTimes(1);
  });
});