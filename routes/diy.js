var express = require('express');
var router = express.Router();

/* Redirect traffic going to the diy URL to the Support page */
router.get('/', function(req, res, next) {
	res.status(301).redirect('support');
});

module.exports = router;
