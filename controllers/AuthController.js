/*
let User = require('../models/UserModels');

exports.register = (req, res, err) => {
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
        User.register(new_user, (err, user) => {
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

exports.login = (req, res) => {
    User.login((err, user) => {
        if(err)
            res.json({
                status: false,
                message: 'username or password is incorrect!',
                data: null,
            });

        res.json({
            status: true,
            message: 'you are logged in!',
            data:null
        })
    });
};

exports.logout = (req,res) => {
    User.logout((err, user) => {

    });
};*/
