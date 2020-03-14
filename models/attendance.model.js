var sql = require('../utils/db');

var Attendance = function() {

};

Attendance.check = function (user_id, callback) {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    if (month < 10) {
        month = '0' + month.toString();
    }
    let date = today.getDate();
    if (date < 10) {
        date = '0' + date.toString();
    }
    let hour = today.getHours();
    if (hour < 10) {
        hour = '0' + hour.toString();
    }
    let minute = today.getMinutes();
    if (minute < 10) {
        minute = '0' + minute.toString();
    }
    let second = today.getSeconds();
    if (second < 10) {
        second = '0' + second.toString();
    }
    let dateStr = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    let value = [[user_id, dateStr]]
    sql.query(`INSERT INTO attendance (user_id, check_in) VALUES ?`, [value], function(err, result) {
        if (err) {
            callback(false, err);
        } else {
            callback(true, result);
        }
    });
}

module.exports = Attendance;
