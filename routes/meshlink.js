const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { meshlinkIndex, meshlinkNew, meshlinkCreate, meshlinkShow, meshlinkEdit, meshlinkEditForm, meshlinkUpdate, meshlinkDestroy } = require('../controllers/meshlink');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(meshlinkIndex));

// New Route
router.get('/new', asyncErrorHandler(meshlinkNew));

// Create Route
router.post("/", asyncErrorHandler(meshlinkCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(meshlinkShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(meshlinkEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(meshlinkEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(meshlinkUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(meshlinkDestroy));

module.exports = router;
