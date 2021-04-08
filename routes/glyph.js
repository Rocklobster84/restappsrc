const express = require('express');
const router = express.Router();

/* Redirect traffic going to glyph to glyph2 */
router.get(['/', '/index.html'], function(req, res, next) {
	res.status(301).redirect('https://www.pointwise.com/glyph2/');
});

module.exports = router;
