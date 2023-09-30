const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());

// Database connection
 const db = require('./db');

app.listen(port, () => {
	console.log('Server is running on port ${8080}');
});

// Require and use the task routes
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
