const express = require('express')
const router = express.Router()
const EmployeeController =   require('../controllers/EmployeeController.js');

// Retrieve all employees
router.get('/', EmployeeController.findAll);
// Create a new employee
router.post('/', EmployeeController.create);
// Retrieve a single employee with id
router.get('/show/:id', EmployeeController.findById);
// Update a employee with id
router.put('/update/:id', EmployeeController.update);
// Delete a employee with id
router.delete('/delete/:id', EmployeeController.delete);
module.exports = router