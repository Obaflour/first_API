const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Require and use the task routes
 const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Database connection
 const db = require('./db');

app.listen(port, () => {
	console.log('Server is running on port ${port}');
});
