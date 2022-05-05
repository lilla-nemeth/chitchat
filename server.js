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
  socket.on('joinRoom', (room, username, timestamp) => {
    const user = userJoin(socket.id, room, username, timestamp);
    socket.emit('socketId', socket.id);

    console.log('socketId', socket.id);
    // console.log('user', user);

    // console.log('roomId', room);
    // console.log('username', username);
    // console.log('timestamp', timestamp);
    // console.log('user', user);
    console.log('roomId', user.room);
    console.log('username', user.username);
    console.log('timestamp', user.timestamp);

    socket.broadcast.to(user.room).emit('usersList', user);

    socket.join(user.room);

    socket.emit('message', 'Welcome to ChitChat!');

    socket.broadcast
      .to(user.room)
      .emit('message', `${user.username} has joined the chat`);

    // TODO: create a redux action - get room users
  });

  // listen for chatMessage
  socket.on('chatMessage', (message, users) => {
    // const room = user.payload.roomId;
    // console.log(message);
    // console.log(users);
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
