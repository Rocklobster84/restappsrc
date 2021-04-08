const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { workshopsIndex, workshopsNew, workshopsCreate, workshopsShow, workshopsEdit, workshopsEditForm, workshopsUpdate, workshopsDestroy } = require('../controllers/workshops');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(workshopsIndex));

// New Route
router.get('/new', asyncErrorHandler(workshopsNew));

// Create Route
router.post("/", asyncErrorHandler(workshopsCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(workshopsShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(workshopsEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(workshopsEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(workshopsUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(workshopsDestroy));

module.exports = router;
