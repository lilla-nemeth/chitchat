import roomReducer from './roomReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	roomReducer,
});

export default allReducers;
