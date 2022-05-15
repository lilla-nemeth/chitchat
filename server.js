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
const {
  joinUser,
  getRoomUsers,
  getMessageSender,
  leaveUser,
} = require('./utils/users');
const { createTimestamp } = require('./utils/timestamp');
// createTimestamp('%Y-%m-%d %r')
// createTimestamp('{time}')

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

const PORT = 3003 || process.env.PORT;

const botName = 'ChatBot';

// Connects with client
io.on('connection', (socket) => {
  socket.on('ADD_USER', (...message) => {
    const id = message[0].id;
    const roomId = message[0].roomId;
    const username = message[0].username;
    const timestamp = message[0].timestamp;
    // console.log(message);
    // console.log(id, roomId, username, timestamp);

    const user = joinUser(id, roomId, username, timestamp);

    socket.join(user.roomId);

    socket.emit(
      'serverMessage',
      uuidv4(),
      null,
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
        null,
        `${user.username} has joined the chat`,
        botName,
        createTimestamp('{time}'),
        id
      );

    // if (id != user.id) {
    io.to(user.roomId).emit('sendUsersList', getRoomUsers(user.roomId));
    // }
  });

  socket.on('ADD_MESSAGE', (...message) => {
    const id = message[0].id;
    const userId = message[0].userId;
    const receivedMessage = message[0].message;
    const author = message[0].author;
    const timestamp = message[0].timestamp;
    // console.log(message);

    const user = getMessageSender(userId);

    if (user) {
      socket.broadcast
        .to(user.roomId)
        .emit(
          'receivedMessage',
          id,
          userId,
          receivedMessage,
          author,
          timestamp
        );
    }
  });

  socket.on('REMOVE_USER', (...message) => {
    const id = message[0].users.id;

    const user = leaveUser(id);

    if (user) {
      socket.broadcast
        .to(user.roomId)
        .emit(
          'serverMessage',
          uuidv4(),
          null,
          `${user.username} has left the chat`,
          botName,
          createTimestamp('{time}'),
          id
        );

      io.to(user.roomId).emit('sendUsersList', getRoomUsers(user.roomId));
    }
  });
});

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
