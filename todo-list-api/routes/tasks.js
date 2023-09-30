const express = require('express');
const router = express.Router();

// Temporary array to store tasks (replace with a database later)
const tasks = [];

// Create a task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Read all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Read a single task by ID
router.get('/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks[taskId];
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

// Update a task by ID
router.put('/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;
  const updatedTask = { title, description };
  tasks[taskId] = updatedTask;
  res.json(updatedTask);
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  if (!tasks[taskId]) {
    return res.status(404).json({ message: 'Task not found' });
  }
  tasks.splice(taskId, 1);
  res.status(204).send();
});

module.exports = router;
