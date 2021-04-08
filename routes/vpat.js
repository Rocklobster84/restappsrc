const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { vpatIndex, vpatNew, vpatCreate, vpatShow, vpatEdit, vpatEditForm, vpatUpdate, vpatDestroy } = require('../controllers/vpat');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(vpatIndex));

// New Route
router.get('/new', asyncErrorHandler(vpatNew));

// Create Route
router.post("/", asyncErrorHandler(vpatCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(vpatShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(vpatEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(vpatEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(vpatUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(vpatDestroy));

module.exports = router;
