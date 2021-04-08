const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { downloadsIndex, downloadsNew, downloadsCreate, downloadsShow, downloadsEdit, downloadsEditForm, downloadsUpdate, downloadsDestroy, downloadsRC } = require('../controllers/downloads');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(downloadsIndex));

// New Route
router.get('/new', asyncErrorHandler(downloadsNew));

// Create Route
router.post("/", asyncErrorHandler(downloadsCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(downloadsShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(downloadsEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(downloadsEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(downloadsUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(downloadsDestroy));

module.exports = router;
