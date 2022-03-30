var express = require('express');
var router = express.Router();
var times = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  times+=1;
  res.render('users', { title: 'User accesses are:' + times ,fact: 'Ramu'});
});

module.exports = router;
