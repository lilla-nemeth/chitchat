const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
const { v4: uuidv4 } = require('uuid');
const { userJoin, messageSender } = require('./utils/users');
const { createTimestamp } = require('./utils/timestamp');
// createTimestamp('%Y-%m-%d %r')

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

const PORT = 3003 || process.env.PORT;

const botName = 'ChatBot';

// Connects with client
io.on('connection', (socket) => {
  socket.on('sendUser', (...message) => {
    const id = message[0].id;
    const roomId = message[0].roomId;
    const username = message[0].username;
    const timestamp = message[0].timestamp;

    const user = userJoin(id, roomId, username, timestamp);

    socket.join(user.roomId);

    // TODO: fix this
    socket.to(user.roomId).emit('joinUser', id, roomId, username, timestamp);

    socket.emit(
      'serverMessage',
      uuidv4(),
      'Welcome to ChitChat!',
      botName,
      createTimestamp('{time}'),
      id
    );

    socket.broadcast
      .to(user.roomId)
      .emit(
        'serverMessage',
        uuidv4(),
        `${user.username} has joined the chat`,
        botName,
        createTimestamp('{time}'),
        id
      );
  });

  socket.on('chatMessage', (...message) => {
    // TODO: this socket.on doesn't work - fix this
    console.log(message);
  });

  // socket.on('disconnect', () => {
  //   // io.emit('message', 'A user has left the chat');
  // });
});

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
