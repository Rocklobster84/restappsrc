var express = require('express');
var router = express.Router();

/* Redirect traffic going to the follow URL to the confirmation page */
router.get('/', function(req, res, next) {
	res.status(301).redirect('confirmation');
});

module.exports = router;
