let mysql  = require('mysql');
let config = require('./config.js');
let con = mysql.createConnection(config);
con.connect(function (err) {
    if(!!err)
    {
        console.log(err);
    }
    else
    {
        console.log('connected...!');
    }
});
con.end();

module.exports = con;
