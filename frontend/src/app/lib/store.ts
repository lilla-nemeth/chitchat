import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './features/room/roomSlice';
import userReducer from './features/user/userSlice';
import messageReducer from './features/message/messageSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			rooms: roomReducer,
			users: userReducer,
			messages: messageReducer,
		},
	});
};
