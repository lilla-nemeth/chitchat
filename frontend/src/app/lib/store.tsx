import { configureStore, Middleware } from '@reduxjs/toolkit';
import roomReducer from './features/room/roomSlice';
import userReducer from './features/user/userSlice';
import messageReducer from './features/message/messageSlice';
import socketMiddleware from './socketMiddleware';

import {
	addMessage,
	receiveMessage,
	// receiveReplyMessage
} from './features/message/messageSlice';
import { sendUsers } from './features/user/userSlice';

const socketConfig = {
	url: 'http://localhost:8080/',
	listeners: [
		{ message: 'sendUsersList', action: sendUsers },
		{ message: 'serverMessage', action: addMessage },
		{ message: 'receiveMessage', action: receiveMessage },
		// { message: 'receiveReplyMessage', action: receiveReplyMessage },
	],
	subscribers: [
		'users/addUser',
		'messages/addMessage',
		// 'messages/addReplyMessage'
	],
};

const socketMiddlewareInstance: Middleware = socketMiddleware(socketConfig);

export const makeStore = () => {
	return configureStore({
		reducer: {
			rooms: roomReducer,
			users: userReducer,
			messages: messageReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}).concat(socketMiddlewareInstance),
	});
};
