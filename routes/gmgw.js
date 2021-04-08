var express = require('express');
var router = express.Router();

/* Redirect traffic going to the gmgw URL to the GMGWorkshop website */
router.get('/', function(req, res, next) {
	res.status(301).redirect('http://www.gmgworkshop.com/');
});

module.exports = router;
