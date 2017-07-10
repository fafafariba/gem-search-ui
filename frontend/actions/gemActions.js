import { fetchGem } from '../utils/gemAPIUtil';

export const RECEIVE_GEM = 'RECEIVE_GEM';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveGem = gem => ({
	type: RECEIVE_GEM,
	gem
});

const receiveErrors = errors => ({
	type: RECEIVE_ERRORS,
	errors
});

const receiveNoErrors = () => ({
		type: CLEAR_ERRORS,
		errors: null
});

export const queryGem = gem => dispatch => (
	fetchGem(gem).then(gem => dispatch(receiveGem(gem))).fail(errors => dispatch(receiveErrors(errors.responseJSON.errors)))
);

export const clearErrors = () => dispatch => (
	dispatch(receiveNoErrors())
);
