const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { getHelpIndex, getHelpNew, getHelpCreate, getHelpShow, getHelpEdit, getHelpEditForm, getHelpUpdate, getHelpDestroy } = require('../controllers/gethelp');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(getHelpIndex));

// New Route
router.get('/new', asyncErrorHandler(getHelpNew));

// Create Route
router.post("/", asyncErrorHandler(getHelpCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(getHelpShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(getHelpEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(getHelpEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(getHelpUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(getHelpDestroy));


	module.exports = router;
