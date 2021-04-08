const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { legalIndex, legalNew, legalCreate, legalShow, legalEdit, legalEditForm, legalUpdate, legalDestroy } = require('../controllers/legal');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(legalIndex));

/* Redirect privacy URL */
router.get('/privacy.html',function (req, res, next) {
	res.status(301).redirect('/legal/privacy');
});

// New Route
router.get('/new', asyncErrorHandler(legalNew));

// Create Route
router.post("/", asyncErrorHandler(legalCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(legalShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(legalEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(legalEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(legalUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(legalDestroy));

module.exports = router;
