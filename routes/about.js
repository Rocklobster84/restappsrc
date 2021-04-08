const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { aboutIndex, aboutNew, aboutCreate, aboutShow, aboutEdit, aboutEditForm, aboutUpdate, aboutDestroy } = require('../controllers/about');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(aboutIndex));

// New Route
router.get('/new', asyncErrorHandler(aboutNew));

// Create Route
router.post("/", asyncErrorHandler(aboutCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(aboutShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(aboutEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(aboutEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(aboutUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(aboutDestroy));

module.exports = router;
