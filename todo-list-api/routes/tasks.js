const express = require('express');
const router = express.Router();

// Define your task-related routes here

module.exports = router;

// GET route to test
router.get('/', (req, res) => {
	res.json({ message: 'Hello, World!' });
});

module.exports = router;
