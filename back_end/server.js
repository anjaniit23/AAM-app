/* eslint-disable prettier/prettier */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var database = require('./db');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aam_app',
});

// Get all beers
app.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    }
    console.log('connected');
    connection.query('SELECT * FROM login', (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }

      // if(err) throw err
      console.log('The data from table are: \n', rows);
    });
  });
});



app.post('/login', function (request, response, next) {

  var user_email_address = request.body.user_email_address;

  var user_password = request.body.user_password;
// var loginName = 'login data';
  if (user_email_address && user_password) {
   let query = `
    SELECT * FROM login
    WHERE email = "${user_email_address}"
    `;

    database.query(query, function (error, data) {
console.log(data);
      if (data) {
        for (var count = 0; count < data.length; count++) {
          console.log(data[count].password);
          if (data[count].password == user_password) {
            // request.session.user_id = data[count].user_id;

            // response.redirect("/");
            response.send("loggined");

          }
          else {
            response.send('Incorrect Password');
          }
        }
      }
      else {
        response.send('Incorrect Email Address');
      }
      response.end();
    });
  }
  else {
    response.send('Please Enter Email Address and Password Details');
    response.end();
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));
