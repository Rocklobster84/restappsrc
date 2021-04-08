const express = require('express');
const router = express.Router();

/* Redirect traffic from doc/user-manual to just user-manual */
router.get('/', function(req, res, next) {
	res.status(301).redirect('https://www.pointwise.com/doc/user-manual/');
});

module.exports = router;
