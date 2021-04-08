const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { scitechIndex, scitechNew, scitechCreate, scitechShow, scitechEdit, scitechEditForm, scitechUpdate, scitechDestroy } = require('../controllers/scitech');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(scitechIndex));

// New Route
router.get('/new', asyncErrorHandler(scitechNew));

// Create Route
router.post("/", asyncErrorHandler(scitechCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(scitechShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(scitechEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(scitechEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(scitechUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(scitechDestroy));

module.exports = router;
