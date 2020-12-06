let dbCon = require('../../database/connection.js');

let sql = "CREATE TABLE IF NOT EXISTS users (first_name VARCHAR(255), last_name VARCHAR(255), username VARCHAR(225), password VARCHAR(255), 'created_at' DATETIME NOT NULL, 'updated_at' DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,)";

dbCon.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
