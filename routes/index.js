var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index.html'], function(req, res, next) {
  res.render('index', { title: 'Mesh Generation Software for CFD | Pointwise, Inc.' });
});

router.get(['/error', '/error.html'], function(req, res, next) {
  res.render('error');
})

module.exports = router;
