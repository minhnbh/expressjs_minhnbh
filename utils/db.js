var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'minhnbh_db',
    password : 'minhnbh_db',
    database : 'minhnbh_expressjs',
    port     : '3306',
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
