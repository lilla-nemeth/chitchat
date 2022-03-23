const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = 3002 || process.env.PORT;

// Connects with the client
io.on('connection', (socket) => {
  //   socket.on('join', ({ username, room }, callback) => {});
  //   socket.on('sendMessage', (message) => {});
  //   socket.on('disconnect', () => {});
});

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

httpServer.listen(PORT, () => console.log(`server is running or ${PORT}`));
