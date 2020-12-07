const express = require('express');
const router = express.Router();
const UserController =   require('../controllers/UserController.js');

// Retrieve all employees
router.get('/', UserController.findAll);
// Create a new employee
router.post('/', UserController.create);
// Retrieve a single employee with id
router.get('/:id', UserController.findById);
// Update a employee with id
router.patch('/:id', UserController.update);
// Delete a employee with id
router.delete('/:id', UserController.delete);
module.exports = router;