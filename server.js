const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});
const { userJoin, messageSender } = require('./utils/users');

const PORT = 3003 || process.env.PORT;

// Connects with client
io.on('connection', (socket) => {
  // receives the addUser values from Home component
  socket.on('sendUser', (id, roomId, username, timestamp) => {
    console.log(id, roomId, username, timestamp);
    // TODO: fix this, I should send back to the client in the rigth form
    socket.emit('joinUser', socket.id, roomId, username, timestamp);
  });
});

// // socket.on('joinRoom', (userData) => {
// socket.on('joinRoom', (id, roomId, username, timestamp) => {
//   // const id = userData.payload.id;
//   // const roomId = userData.payload.roomId;
//   // const username = userData.payload.username;
//   // const timestamp = userData.payload.timestamp;

//   // console.log(id, roomId, username, timestamp);

//   const user = userJoin(id, roomId, username, timestamp);

//   socket.join(user.roomId);

//   socket.emit('usersList', user);
//   // io.to(user.roomId).emit('usersList', user);

//   socket.emit('message', 'Welcome to ChitChat!');

//   socket.broadcast
//     .to(user.roomId)
//     .emit('message', `${user.username} has joined the chat`);
// });

// socket.on('chatMessage', (userId, message, username, timestamp) => {
//   // socket.on('chatMessage', (message) => {
//   // const userId = message.payload.userId;
//   // TODO: fix this
//   const user = messageSender(userId);
//   console.log(user);

//   // emit chatMessage to the room:
//   // io.to(user.roomId).emit('getMessage', userId, message, username, timestamp);
//   io.emit('getMessage', userId, message, username, timestamp);
// });

// socket.on('disconnect', () => {
//   io.emit('message', 'A user has left the chat');
// });
// });

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
