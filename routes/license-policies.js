const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { licensePolIndex, licensePolNew, licensePolCreate, licensePolShow, licensePolEdit, licensePolEditForm, licensePolUpdate, licensePolDestroy } = require('../controllers/license-policies');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(licensePolIndex));

// New Route
router.get('/new', asyncErrorHandler(licensePolNew));

// Create Route
router.post("/", asyncErrorHandler(licensePolCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(licensePolShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(licensePolEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(licensePolEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(licensePolUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(licensePolDestroy));

module.exports = router;
