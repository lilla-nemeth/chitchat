const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
// const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
	console.log(socket.id);
});

// Access to static folder
// app.use(express.static(path.join(__dirname, 'client')));
const PORT = 3002 || process.env.PORT;

httpServer.listen(PORT, () => console.log(`server is running or ${PORT}`));
