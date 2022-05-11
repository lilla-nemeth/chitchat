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
  socket.on('ADD_USER', (...message) => {
    const id = message[0].id;
    const roomId = message[0].roomId;
    const username = message[0].username;
    const timestamp = message[0].timestamp;

    const user = userJoin(id, roomId, username, timestamp);

    socket.join(user.roomId);

    socket.emit(
      'sendMessage',
      uuidv4(),
      'Welcome to ChitChat!',
      botName,
      createTimestamp('{time}'),
      id
    );

    socket.broadcast
      .to(user.roomId)
      .emit(
        'sendMessage',
        uuidv4(),
        `${user.username} has joined the chat`,
        botName,
        createTimestamp('{time}'),
        id
      );
  });

  socket.on('ADD_MESSAGE', (...message) => {
    console.log(message);
  });

  //   // TODO: this socket.on doesn't work - fix this
  //   // const id = message[0].id;
  //   // const receivedMessage = message[0].message;
  //   // const author = message[0].author;
  //   // const timestamp = message[0].timestamp;
  //   console.log(message);
  //   // io.emit('chatMessage', id, receivedMessage, author, timestamp);

  // socket.on('disconnect', () => {
  //   // io.emit('message', 'A user has left the chat');
  // });
});

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
