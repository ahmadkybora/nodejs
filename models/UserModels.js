const dbCon = require('../database/connection');
/*const table = 'users';*/

let User = function(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.username = user.username;
    this.password = user.password;
    this.created_at = new Date();
    this.updated_at = new Date();
};

User.create = (newUs, result) => {
    dbCon.query("INSERT INTO users SET ?", newUs, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

User.findAll = function (result) {
    dbCon.query("Select * from users", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

User.findById = (id, result) => {
    dbCon.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};

User.update = function(id, user, result){
    dbCon.query("UPDATE employees SET first_name=?,last_name=?,username=?,password=? WHERE id = ?", [user.first_name,user.last_name,user.username,user.password, id], function (err, res) {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    });
};

User.delete = (id, result) => {
    dbCon.query("DELETE FROM users WHERE id = ?", [id], (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
};

User.register = (register, result) => {
    dbCon.query("INSERT INTO users SET ?", register, (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
        }
        else
        {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

User.login = (username, result) => {
    dbCon.query("SELECT * FROM users WHERE username = ?", username, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

User.logout = () => {};

module.exports = User;