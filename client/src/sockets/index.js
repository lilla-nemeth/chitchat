import * as types from '../constants/actionTypes';
import { addUser, messageReceived, updateUsers } from '../actions';
import { io } from 'socket.io-client';

const setupSocket = (dispatch) => {
	const socket = io('http://localhost:3003');

	// Connects with server
	socket.on('connect', () => {
		console.log('socket.id:', `${socket.id}`);

		// send addUser to server
		socket.emit('addUser', { type: types.ADD_USER });
	});

	// socket.on('message', (event) => {});
};

export default setupSocket;
