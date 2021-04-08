const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { studyIndex, studyNew, studyCreate, studyShow, studyEditForm, studyUpdate, studyDestroy } = require('../controllers/case-studies');

// Index/Edit Route
router.get('/edit', asyncErrorHandler(studyIndex));

// New Route
router.get('/new', asyncErrorHandler(studyNew));

// Create Route
router.post("/", asyncErrorHandler(studyCreate));

// Show Route
router.get("/:id", asyncErrorHandler(studyShow));

// Individual Edit Route
router.get("/edit/:id", asyncErrorHandler(studyEditForm));

// Update Route
router.put("/:id", asyncErrorHandler(studyUpdate));

// Destroy Route
router.delete("/:id", asyncErrorHandler(studyDestroy));

// Static Routes and Redirects
router.get(['/P8frz3u25NPSBquR', '/P8frz3u25NPSBquR/index.html'], function(req, res, next){
	res.redirect(301, 'https://www.pointwise.com/case-studies/5faad43b04d997423c0ac579');
});
router.get(['/aez7aNwKs6KrSPhM', '/aez7aNwKs6KrSPhM/index.html'], function(req, res, next){
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa464015787332e68115136');
});
router.get([ '/54kuWFTA4JsyzG9Q/', '/54kuWFTA4JsyzG9Q/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa32dab11c6543f14928bbe');
});
router.get([ '/fHPt7bLKVpVqye7t/', '/fHPt7bLKVpVqye7t/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa9a44a9d586024a4bfbcab');
});
router.get([ '/qyUCBLQjcv2mgM7e/', '/qyUCBLQjcv2mgM7e/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5faaec5304d997423c0ac57b');
});
router.get([ '/d3JtBQ3wEJ4nkndh/', '/d3JtBQ3wEJ4nkndh/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa969898e31332d3479f6ae');
});
router.get([ '/c3XgZ3sApY7kt2yq', '/c3XgZ3sApY7kt2yq/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa59a9362b00106a458f4a5');
});

router.get(
		[
			'/Automatic-Generation-Meshes-Using-Pointwise-Glyph',
			'/Automatic-Generation-Meshes-Using-Pointwise-Glyph/index.html'
		],
		function(req, res, next) {
			res.redirect(301, 'https://www.pointwise.com/case-studies/5fa46c815787332e68115137');
		}
);

router.get([ '/CcwVTNr376bHQbG7', '/CcwVTNr376bHQbG7/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa5c0bd62b00106a458f4a6');
});

router.get([ '/hvzfYryYG4LyZE6a/', '/hvzfYryYG4LyZE6a/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fa9acdcfa21213bc831692d');
});

router.get([ '/jLE8gbRP4vVvKDU9', '/jLE8gbRP4vVvKDU9/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5faacb5504d997423c0ac578');
});

router.get([ '/Pointwise-Evolution-Automated-Meshing', '/Pointwise-Evolution-Automated-Meshing/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5faad78404d997423c0ac57a');
});

router.get([ '/U3dS33ng4YN7frFJ', '/U3dS33ng4YN7frFJ/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5faaf33404d997423c0ac57c');
});
router.get(
		[ '/Using-CFD-Increase-Safety-Driverless-Cars', '/Using-CFD-Increase-Safety-Driverless-Cars/index.html' ],
		function(req, res, next) {
			res.redirect(301, 'https://www.pointwise.com/case-studies/5faaf77a04d997423c0ac57d');
		}
);

router.get([ '/Yw8SDvV6UL9csNTa', '/Yw8SDvV6UL9csNTa/index.html' ], function(req, res, next) {
	res.redirect(301, 'https://www.pointwise.com/case-studies/5fab024d04d997423c0ac57e');
});

router.get([ '/Yw8SDvV6UL9csNTa/XWnfhUtp3ZQXsq2L', '/Yw8SDvV6UL9csNTa/XWnfhUtp3ZQXsq2L.html' ], function(req, res, next) {
	res.render('case-studies/Yw8SDvV6UL9csNTa/XWnfhUtp3ZQXsq2L');
});

module.exports = router;
