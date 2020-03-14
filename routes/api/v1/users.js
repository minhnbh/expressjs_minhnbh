var User = require('../../../models/user.model');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello there!!!');
  User.getAll((status, data) => {
    if (status) {
      res.send(data);
    } else {
      res.send('error');
    }
  });
});

module.exports = router;
