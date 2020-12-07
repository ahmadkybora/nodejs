const http = require('http');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;

const EmployeeRoutes = require('./routes/EmployeesRoutes.js');
const UserRoutes = require('./routes/UsersRoutes.js');
/*const AuthRoutes = require('./routes/AuthRoutes.js');*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/api/panel/employees', EmployeeRoutes);
app.use('/api/panel/users', UserRoutes);
/*app.use('/api/panel/auth', AuthRoutes);*/
/*app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});*/
app.listen(5000);
module.exports = app;