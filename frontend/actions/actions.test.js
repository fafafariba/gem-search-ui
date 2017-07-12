import * as GemAPIUtil from '../utils/gemAPIUtil';
import { RECEIVE_GEM, CLEAR_ERRORS, queryGem, clearErrors } from './gemActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Gem Actions', () => {
	
	describe('Constants', () => {
		
		test('should contain a RECEIVE_GEM constant', () => {
			expect(RECEIVE_GEM).toEqual('RECEIVE_GEM');
		});

		test('should contain a CLEAR_ERRORS constant', () => {
			expect(CLEAR_ERRORS).toEqual('CLEAR_ERRORS');
		});
	});

	describe('Thunk', () => {
		
		let store;

		beforeEach(() => {
			store = mockStore({ gem: {} })
		});

		describe('queryGem', () => {
			
			test('should export queryGem function', () => {
				expect(typeof queryGem).toEqual('function');
			});

			test('dispatches RECEIVE_GEM when gem has been queried', () => {
				const testGem = { 
					name: 'hpricot', 
					info: 'a swift, liberal HTML parser with a fantastic library', 
					dependencies: []
				};
				GemAPIUtil.fetchGem = jest.fn(gem => (
					Promise.resolve(testGem)
				));
				const expectedActions = [{ type: 'RECEIVE_GEM', gem: testGem }];

				return store.dispatch(queryGem(testGem.name)).then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				});
			});
		})

		describe('clearErrors', () => {
			
			test('should export clearErrors function', () => {
				expect(typeof clearErrors).toEqual('function');
			});

			test('dispatches CLEAR_ERRORS when called', () => {
				
				const expectedActions = [{ type: 'CLEAR_ERRORS', errors: null }];

				return store.dispatch(clearErrors()).then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				});
			});
		})
	});
})