var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'minhnbh',
    password : 'minhnbh123',
    database : 'expressjs_api',
    port     : '3306',
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
