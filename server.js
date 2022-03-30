const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(server, {
	cors: {
		origin: ['http://localhost:3000'],
	},
});
const path = require('path');

const PORT = 3003 || process.env.PORT;

const users = [];

app.use(cors());

app.get('/', (req, res) => {
	res.send('test');
});

// Connects with client
io.on('connection', (socket) => {
	console.log('socket.id:', socket.id);

	socket.on('addUser', (object) => {
		console.log(object);
	});
});

// Access to static folder
app.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => console.log(`server is running or ${PORT}`));
