const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
	},
});
const { v4: uuidv4 } = require('uuid');
const { userJoin, getRoomUsers, getMessageSender, userLeave } = require('./utils/users');
const { createTimestamp } = require('./utils/timestamp');

const PORT = 8080 || process.env.PORT;

const botName = '@chatbot';

// Connects with client
io.on('connection', (socket) => {
	// listens to addUser and updates the user list
	socket.on('users/addUser', (...message) => {
		const id = message[0].id;
		const roomId = message[0].room_id;
		const username = message[0].username;
		const timestamp = message[0].timestamp;

		const user = userJoin(id, roomId, username, timestamp);

		socket.join(user.roomId);

		socket.emit('messages/serverMessage', {
			id: uuidv4(),
			userId: null,
			message: `Welcome ${user.username}!`,
			author: botName,
			timestamp: createTimestamp('{time}'),
		});

		socket.broadcast.to(user.roomId).emit('messages/serverMessage', {
			id: uuidv4(),
			userId: null,
			message: `${user.username} has joined the room`,
			author: botName,
			timestamp: createTimestamp('{time}'),
		});

		io.to(user.roomId).emit('users/sendUsers', getRoomUsers(user.roomId));
	});

	// listen to addMessage and send message back with receiveMessage to other room users
	socket.on('messages/addMessage', (...message) => {
		const id = message[0].id;
		const userId = message[0].userId;
		const chatMessage = message[0].message;
		const author = message[0].author;
		const timestamp = message[0].timestamp;

		const user = getMessageSender(userId);

		if (user) {
			socket.broadcast.to(user.roomId).emit('messages/receiveMessage', { id, userId, message: chatMessage, author, timestamp });
		}
	});

	socket.on('messages/addReplyMessage', (...message) => {
		const id = message[0].id;
		const userId = message[0].userId;
		const selectedMessageId = message[0].selectedMessageId;
		const selectedMessageUserId = message[0].selectedMessageUserId;
		const selectedMessageMsg = message[0].selectedMessageMsg;
		const selectedMessageAuthor = message[0].selectedMessageAuthor;
		const selectedMessageTimestamp = message[0].selectedMessageTimestamp;
		const chatMessage = message[0].message;
		const author = message[0].author;
		const timestamp = message[0].timestamp;

		const user = getMessageSender(userId);

		if (user) {
			socket.broadcast.to(user.roomId).emit('messages/receiveReplyMessage', {
				id,
				userId,
				selectedMessageId,
				selectedMessageUserId,
				selectedMessageMsg,
				selectedMessageAuthor,
				selectedMessageTimestamp,
				message: chatMessage,
				author,
				timestamp,
			});
		}
	});

	// Disconnecting
	socket.on('users/addUser', (...message) => {
		const id = message[0].id;

		socket.on('disconnect', () => {
			const user = userLeave(id);

			if (user) {
				socket.broadcast.to(user.roomId).emit('messages/serverMessage', {
					id: uuidv4(),
					userId: user.id,
					message: `${user.username} has left the room`,
					author: botName,
					timestamp: createTimestamp('{time}'),
				});

				io.to(user.roomId).emit('users/sendUsers', getRoomUsers(user.roomId));
			}
		});
	});
});

server.listen(PORT, () => console.log(`server is running on ${PORT}`));
