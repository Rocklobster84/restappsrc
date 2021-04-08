var express = require('express');
var router = express.Router();

/* Redirect traffic going to the free URL to the Hubspot page */
router.get('/', function(req, res, next) {
	res.status(301).redirect('https://info.pointwise.com/pointwise-trial');
});

module.exports = router;
