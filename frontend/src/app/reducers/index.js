import roomReducer from './roomReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  roomReducer,
  messageReducer,
  userReducer,
});

export default allReducers;
