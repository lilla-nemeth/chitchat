const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});
const { userJoin } = require('./utils/users');

const PORT = 3003 || process.env.PORT;

// Connects with client
io.on('connection', (socket) => {
  // socket.on('joinRoom', (userData) => {
  socket.on('joinRoom', (id, roomId, username, timestamp) => {
    // const id = userData.payload.id;
    // const roomId = userData.payload.roomId;
    // const username = userData.payload.username;
    // const timestamp = userData.payload.timestamp;

    // console.log(id, roomId, username, timestamp);

    const user = userJoin(id, roomId, username, timestamp);

    socket.join(user.roomId);

    socket.emit('usersList', user);
    // io.to(user.roomId).emit('usersList', user);

    socket.emit('message', 'Welcome to ChitChat!');

    socket.broadcast
      .to(user.roomId)
      .emit('message', `${user.username} has joined the chat`);
  });

  // listen for chatMessage
  socket.on('chatMessage', (message) => {
    // const room = user.payload.roomId;
    // console.log(message);
    // console.log(users);
    // users.find((user) => user.id === message.userId);
    // console.log(socket.id);

    // emit chatMessage to everyone:
    //TODO: change to this: io.to(user.room).emit(...)
    io.emit('sentMessage', message);
  });

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });
});

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
