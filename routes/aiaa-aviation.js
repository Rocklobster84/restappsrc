const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { aviationIndex, aviationNew, aviationCreate, aviationShow, aviationEdit, aviationEditForm, aviationUpdate, aviationDestroy } = require('../controllers/aviation');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(aviationIndex));

// New Route
router.get('/new', asyncErrorHandler(aviationNew));

// Create Route
router.post("/", asyncErrorHandler(aviationCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(aviationShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(aviationEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(aviationEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(aviationUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(aviationDestroy));

module.exports = router;
