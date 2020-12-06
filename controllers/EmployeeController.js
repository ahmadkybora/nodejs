const Employee = require('../models/EmployeeModel.js');

/**
 * this method for get all employees from table
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    Employee.findAll((err, employee) => {
        if (err)
            res.send(err);

        res.json({
            status: true,
            message:"success!",
            data: employee,
        });
    });
};

/**
 * this method for create employee
 * @param req
 * @param res
 */
exports.create = (req, res) => {
    const new_employee = new Employee(req.body.user);
//handles null error
    /*if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.status(400).send({
            status: false,
            message: 'Please provide all required field',
            data: null,
        });
    }
    else*/
    {
        Employee.create(new_employee, (err, employee) => {
            if (err)
                res.send(err);

            res.json({
                error: true,
                message: "Employee added successfully!",
                data: employee,
            });
        });
    }
};

exports.findById = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err)
            res.send(err);

        res.json({
            status: true,
            message:"success!",
            data: employee,
        });
    });
};

exports.update = (req, res) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.status(400).send({
            error:true,
            message: 'Please provide all required field',
        });
    }
    else
    {
        Employee.update(req.params.id, new Employee(req.body), (err, employee) => {
            if (err)
                res.send(err);

            res.json({
                status: true,
                message: 'Employee successfully updated',
            });
        });
    }
};

exports.delete = (req, res) => {
    Employee.delete( req.params.id, (err, employee) => {
        if (err)
            res.send(err);

        res.json({
            status: true,
            message: 'Employee successfully deleted',
            data: null,
        });
    });
};