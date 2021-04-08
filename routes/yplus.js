const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { yplusIndex, yplusNew, yplusCreate, yplusShow, yplusEdit, yplusEditForm, yplusUpdate, yplusDestroy } = require('../controllers/yplus');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(yplusIndex));

// New Route
router.get('/new', asyncErrorHandler(yplusNew));

// Create Route
router.post("/", asyncErrorHandler(yplusCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(yplusShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(yplusEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(yplusEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(yplusUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(yplusDestroy));

module.exports = router;
