import * as APIUtil from '../utils/gemAPIUtil';

export const RECEIVE_GEM = 'RECEIVE_GEM';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveGem = gem => ({
	type: RECEIVE_GEM,
	gem
});

export const receiveErrors = errors => ({
	type: RECEIVE_ERRORS,
	errors
});

const fetchGem = gem => dispatch => (
	APIUtil.queryGem(gem)
	.then(gem => dispatch(receiveGem(gem)))
	.catch(errors => dispatch(receiveErrors(error)))
);