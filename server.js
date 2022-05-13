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
const { userJoin, getRoomUsers, getMessageSender } = require('./utils/users');
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

    const user = userJoin(id, roomId, username, timestamp);

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

    io.to(user.roomId).emit('sendUsersList', getRoomUsers(user.roomId));
  });

  socket.on('ADD_MESSAGE', (...message) => {
    const id = message[0].id;
    const userId = message[0].userId;
    const receivedMessage = message[0].message;
    const author = message[0].author;
    const timestamp = message[0].timestamp;
    // console.log(message);

    const user = getMessageSender(userId);

    // if the message contains userId (chatBot messages do not)
    // TODO: fix this, each room users should receive each message once
    if (user) {
      io.to(user.roomId).emit(
        'receivedMessage',
        id,
        userId,
        receivedMessage,
        author,
        timestamp
      );
    }
  });

  // socket.on('disconnect', () => {
  //   // io.emit('message', 'A user has left the chat');
  // });
});

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
