
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Define API routes and endpoints here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Database connection
 const db = require('./db');

app.listen(port, () => {
	console.log('Server is running on port ${port}');
});
