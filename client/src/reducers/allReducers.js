import roomReducer from './roomReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	roomReducer,
	userReducer,
});

export default allReducers;
