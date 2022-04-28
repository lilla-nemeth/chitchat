const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
	cors: {
		origin: ['http://localhost:3000'],
	},
});

const PORT = 3003 || process.env.PORT;

const users = [];

// Connects with client
io.on('connection', (socket) => {
	// console.log('socket.id:', socket.id);

	socket.emit('sendId', socket.id);

	socket.on('joinUser', (user) => {
		const userId = user.payload.id;
		const room = user.payload.roomId;
		const username = user.payload.username;

		// console.log(userId);
		// console.log(room);
		// console.log(username);

		socket.join(room);

		// welcome current user:
		socket.emit('message', 'Welcome to ChitChat!');

		// broadcast when user connects:
		socket.broadcast.to(room).emit('message', `${username} has joined the chat`);

		// TODO: create a redux action - get room users
	});

	// listen for chatMessage
	socket.on('chatMessage', (message, users) => {
		// const room = user.payload.roomId;
		// console.log(message);
		console.log(users);
		// users.find((user) => user.id === message.userId);
		// console.log(socket.id);

		// emit chatMessage to everyone:
		io.emit('sentMessage', message);
	});

	////////////////////////////////////////////////////////////

	socket.on('disconnect', () => {
		// TODO: create a redux action - leave user
		io.emit('message', 'A user has left the chat');

		// TODO: create a redux action - get room users
	});
});

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
