import * as types from '../constants/actionTypes';
import { addUser, messageReceived, updateUsers } from '../actions';
import { io } from 'socket.io-client';

let DEBUG = true;
// TODO: think about, should I put more params here? - inputs of redux actions?
const setupSocket = (dispatch, getState) => {
	const socket = io('http://localhost:3003');

	// Connects with server
	socket.on('connect', () => {
		// console.log('socket.id:', `${socket.id}`);

		// const { userReducer } = getState();
		// if (DEBUG) console.log('userReducer', userReducer);
		// send addUser action to server
		socket.emit('joinRoom', { type: types.ADD_USER });
	});

	// socket.on('message', (event) => {});
};

export default setupSocket;
