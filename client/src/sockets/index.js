import * as types from '../constants/actionTypes';
import { addUser, messageReceived, updateUsers } from '../actions';
import { io } from 'socket.io-client';

let DEBUG = true;
// TODO: think about, should I put more params here? - inputs of redux actions?
const setupSocket = (dispatch) => {
	const socket = io('http://localhost:3003');

	// Connects with server
	socket.on('connect', () => {
		// console.log('socket.id:', `${socket.id}`);
		// send addUser action to server

		// roomId, username, timestamp
		// test with dummy data:
		socket.emit('joinRoom', dispatch(addUser('1', 'alma', '05.04.2022')));
	});

	// socket.on('message', (event) => {});
};

export default setupSocket;
