const express = require('express');
const router = express.Router();

/* GET Careers pages */
router.get(['/', '/index.html'], function(req, res, next) {
	res.status(301).redirect('https://pointwise.exacthire.com/');
});

module.exports = router;
