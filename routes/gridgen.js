var express = require('express');
var router = express.Router();

/* Redirect traffic going to the gridgen URL to the Gridgen website */
router.get('/', function(req, res, next) {
	res.status(301).redirect('http://www.gridgen.com/');
});

module.exports = router;
