const express = require('express');
const router = express.Router();

/* Redirect traffic going to activation pro to the http version on Malibu */
router.get(['/', '/index.html'], function(req, res, next) {
	res.status(301).redirect('https://www.pointwise.com/solutions/?tags=wind-energy');
});

module.exports = router;
