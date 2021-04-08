const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { webcastsIndex, webcastsNew, webcastsCreate, webcastsShow, webcastsEdit, webcastsEditForm, webcastsUpdate, webcastsDestroy } = require('../controllers/webcasts');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(webcastsIndex));

// New Route
router.get('/new', asyncErrorHandler(webcastsNew));

// Create Route
router.post("/", asyncErrorHandler(webcastsCreate));

// Show Route
router.get("/:directory/:slug", asyncErrorHandler(webcastsShow));

// Edit Route
router.get("/page/more/edit", asyncErrorHandler(webcastsEdit));

// Individual Edit Route - Shows form
router.get("/page/more/:id", asyncErrorHandler(webcastsEditForm));

// Update Route
router.put("/page/more/:id", asyncErrorHandler(webcastsUpdate));

// Destroy Route
router.delete("/page/more/:id", asyncErrorHandler(webcastsDestroy));

module.exports = router;
