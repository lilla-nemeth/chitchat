const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

const PORT = 3003 || process.env.PORT;

const users = [];

app.use(cors());

app.get('/', (req, res) => {
  res.send('test');
});

// Connects with client
io.on('connection', (socket) => {
  // console.log('socket.id:', socket.id);

  // welcome current user:
  socket.emit('message', 'Welcome to ChitChat!');

  // broadcast when user connects:
  socket.broadcast.emit('message', 'A user joined the chat');

  //////////////////////////////////////////////////////////

  socket.on('joinUser', (user) => {
    console.log(user);
  });

  // listen for chatMessage
  socket.on('chatMessage', (sentMessage) => {
    // emit chatMessage to everyone:
    io.emit('sentMessage', sentMessage);
  });

  ////////////////////////////////////////////////////////////

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });
});

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
