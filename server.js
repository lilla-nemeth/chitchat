const path = require('path');
const express = require('express');
const app = express();

const PORT = 3002 || process.env.PORT;

// Set static folder
// app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => console.log(`server is running or ${PORT}`));
