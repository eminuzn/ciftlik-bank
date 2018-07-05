var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('page-login');
});

router.get('/blank', function(req, res, next) {
  res.render('blank-page');
});
module.exports = router;
