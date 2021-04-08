const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { licensesIndex, licensesNew, licensesCreate, licensesShow, licensesEdit, licensesEditForm, licensesUpdate, licensesDestroy } = require('../controllers/licenses');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(licensesIndex));

// New Route
router.get('/new', asyncErrorHandler(licensesNew));

// Create Route
router.post("/", asyncErrorHandler(licensesCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(licensesShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(licensesEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(licensesEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(licensesUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(licensesDestroy));

module.exports = router;
