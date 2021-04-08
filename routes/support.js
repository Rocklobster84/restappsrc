const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { supportIndex, supportNew, supportCreate, supportShow, supportEdit, supportEditForm, supportUpdate, supportDestroy } = require('../controllers/support');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(supportIndex));

// New Route
router.get('/new', asyncErrorHandler(supportNew));

// Create Route
router.post("/", asyncErrorHandler(supportCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(supportShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(supportEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(supportEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(supportUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(supportDestroy));

module.exports = router;
