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
const {
  userJoin,
  getRoomUsers,
  getMessageSender,
  userLeave,
} = require('./utils/users');
const { createTimestamp } = require('./utils/timestamp');
// createTimestamp('%Y-%m-%d %r')

const PORT = 8080 || process.env.PORT;

const botName = '@ChatBot';

// for production...
// app.use(express.static(path.join(__dirname, 'client/build')));

// Connects with client
io.on('connection', (socket) => {
  // listens to addUser and updates the user list

  socket.on('ADD_USER', (...message) => {
    const id = message[0].id;
    const roomId = message[0].roomId;
    const username = message[0].username;
    const timestamp = message[0].timestamp;

    const user = userJoin(id, roomId, username, timestamp);

    socket.join(user.roomId);

    socket.emit(
      'serverMessage',
      uuidv4(),
      null,
      `Welcome ${user.username}!`,
      botName,
      createTimestamp('{time}')
    );

    socket.broadcast
      .to(user.roomId)
      .emit(
        'serverMessage',
        uuidv4(),
        null,
        `${user.username} has joined the room`,
        botName,
        createTimestamp('{time}')
      );

    io.to(user.roomId).emit('sendUsersList', getRoomUsers(user.roomId));
  });

  // listen to addMessage and send message back with receiveMessage to other room users
  socket.on('ADD_MESSAGE', (...message) => {
    const id = message[0].id;
    const userId = message[0].userId;
    const chatMessage = message[0].message;
    const author = message[0].author;
    const timestamp = message[0].timestamp;

    const user = getMessageSender(userId);

    if (user) {
      socket.broadcast
        .to(user.roomId)
        .emit('receiveMessage', id, userId, chatMessage, author, timestamp);
    }
  });

  socket.on('ADD_REPLY_MESSAGE', (...message) => {
    const prevId = message[0].prevId;
    const prevUserId = message[0].prevUserId;
    const prevChatMessage = message[0].prevMessage;
    const prevAuthor = message[0].prevAuthor;
    const prevTimestamp = message[0].prevTimestamp;
    const id = message[0].id;
    const userId = message[0].userId;
    const chatMessage = message[0].message;
    const author = message[0].author;
    const timestamp = message[0].timestamp;

    const user = getMessageSender(userId);

    if (user) {
      socket.broadcast
        .to(user.roomId)
        .emit(
          'receiveReplyMessage',
          prevId,
          prevUserId,
          prevChatMessage,
          prevAuthor,
          prevTimestamp,
          id,
          userId,
          chatMessage,
          author,
          timestamp
        );
    }
  });

  // Disconnecting
  socket.on('ADD_USER', (...message) => {
    const id = message[0].id;

    socket.on('disconnect', () => {
      const user = userLeave(id);

      if (user) {
        socket.broadcast
          .to(user.roomId)
          .emit(
            'serverMessage',
            uuidv4(),
            null,
            `${user.username} has left the room`,
            botName,
            createTimestamp('{time}')
          );

        io.to(user.roomId).emit('sendUsersList', getRoomUsers(user.roomId));
      }
    });
  });
});

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
