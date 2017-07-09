import { combineReducers } from 'redux';
import GemReducer from './gemReducer';

const RootReducer = combineReducers({
	gem: GemReducer
});

export default RootReducer;