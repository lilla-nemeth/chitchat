import * as types from '../constants/actionTypes';

let messageId = 0;

// add user
export const addUser = (id, roomId, username, timestamp) => ({
	type: types.ADD_USER,
	payload: {
		id,
		roomId,
		username,
		timestamp,
	},
});

export const addMessage = (userId, message, author, timestamp) => ({
	type: types.ADD_MESSAGE,
	payload: {
		id: messageId++,
		userId,
		message,
		author,
		timestamp,
	},
});

export const messageReceived = (userId, message, author, timestamp) => ({
	type: types.MESSAGE_RECEIVED,
	payload: {
		id: messageId++,
		userId,
		message,
		author,
		timestamp,
	},
});

// when the user joins or leaves the chat room
export const updateUsers = (users) => ({
	type: types.UPDATE_USERS,
	payload: {
		users,
	},
});
