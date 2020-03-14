var express = require('express');
var router = express.Router();
var User = require('../../../models/user.model');
var Attendance = require('../../../models/attendance.model');

router.get('/check/:code', function(req, res, next) {
    let params = req.params;
    User.getByCode(params.code, (status, result) => {
        if (status && result) {
            Attendance.check(result.id, (isCheck, checkData) => {
                if (isCheck) {
                    res.send(checkData);
                } else {
                    res.send(checkData);
                }
            });
        } else {
            res.send('User not found!!!');
        }
    });
});

module.exports = router;
