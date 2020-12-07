let User = require('../models/UserModels');

exports.findAll = (req, res) => {
    User.findAll((err, user) => {
        if(err)
            res.json({
                status: false,
                message: 'failed',
                data: err,
            });

        res.json({
            status: true,
            message:"success!",
            data: user,
        });
    });
};

exports.create = (req, res, err) => {
    const new_user = new User(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.json({
            status: false,
            message: 'failed',
            data: err,
        })
    }
    else
    {
        User.create(new_user, (err, user) => {
            if(err)
                res.json({
                    status: false,
                    message: 'failed',
                    data: err,
                });

            res.json({
                status: true,
                message:"success!",
                data: user,
            });
        })
    }
};

exports.findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if(err)
            res.json({
                status: false,
                message: 'failed',
                data: err,
            });

        res.json({
            status: true,
            message: 'success',
            data: user,
        })
    })
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
        User.update(req.params.id, new User(req.body), (err, user) => {
            if (err)
                res.json({
                    status: false,
                    message: 'failed',
                    data: err,
                });

            res.json({
                status: true,
                message: 'Employee successfully updated',
                data: null
            });
        });
    }
};

exports.delete = (req, res) => {
    User.delete(req.params.id, (err, user) => {
        if(err)
            res.json({
                status: false,
                message: 'failed',
                data: err,
            });

        res.json({
            state: true,
            message: 'success',
            data: null,
        })
    })
};