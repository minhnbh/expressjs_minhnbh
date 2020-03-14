var sql = require('../utils/db');

var User = function() {

};

User.getAll = function(callback) {
    sql.query('SELECT * FROM user', function (err, res) {
        if (err) {
            callback(false);
        } else {
            callback(true, res);
        }
    });
}

User.getByCode = function(code, callback) {
    sql.query('SELECT * FROM user WHERE code=' + code, function (err, res) {
        if (err || !res[0]) {
            callback(false, null);
        } else {
            callback(true, res[0]);   
        }
    });
}

module.exports = User;
