const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { geodeIndex, geodeNew, geodeCreate, geodeShow, geodeEdit, geodeEditForm, geodeUpdate, geodeDestroy } = require('../controllers/geode');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(geodeIndex));

// New Route
router.get('/new', asyncErrorHandler(geodeNew));

// Create Route
router.post("/", asyncErrorHandler(geodeCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(geodeShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(geodeEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(geodeEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(geodeUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(geodeDestroy));

module.exports = router;
