const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { brandingIndex, brandingNew, brandingCreate, brandingShow, brandingEdit, brandingEditForm, brandingUpdate, brandingDestroy } = require('../controllers/branding');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(brandingIndex));

// New Route
router.get('/new', asyncErrorHandler(brandingNew));

// Create Route
router.post("/", asyncErrorHandler(brandingCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(brandingShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(brandingEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(brandingEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(brandingUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(brandingDestroy));

module.exports = router;
