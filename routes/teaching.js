const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { teachIndex, teachNew, teachCreate, teachShow, teachEdit, teachEditForm, teachUpdate, teachDestroy } = require('../controllers/teaching');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(teachIndex));

// New Route
router.get('/new', asyncErrorHandler(teachNew));

// Create Route
router.post("/", asyncErrorHandler(teachCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(teachShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(teachEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(teachEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(teachUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(teachDestroy));

module.exports = router;
