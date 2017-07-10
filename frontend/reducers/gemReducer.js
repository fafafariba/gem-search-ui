import merge from 'lodash/merge';
import { RECEIVE_GEM, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/gemActions';

let defaultState = Object.freeze({
	gem: {},
	errors: null
});

const GemReducer = (state = defaultState, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_GEM:
			const gem = action.gem;
			return merge({}, defaultState, { gem });
		case RECEIVE_ERRORS:
			const errors = action.errors;
			return merge({}, defaultState, { errors });
		case CLEAR_ERRORS:
			return merge({}, defaultState, { errors: null });
		default:
			return state;
	}
};

export default GemReducer;