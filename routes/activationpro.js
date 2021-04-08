const express = require('express');
const router = express.Router();

/* Redirect traffic going to activation pro to the http version on Malibu */
router.get('/', function(req, res, next) {
	res.status(301).redirect('https://gateway.pointwise.com/activationpro');
});

module.exports = router;
