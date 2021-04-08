var express = require('express');
var router = express.Router();

/* Redirect traffic going to the pw URL to the Pointwise product page */
router.get('/', function(req, res, next) {
	res.status(301).redirect('pointwise');
});

module.exports = router;
