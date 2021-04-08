const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { contactIndex, contactNew, contactCreate, contactShow, contactEdit, contactEditForm, contactUpdate, contactDestroy } = require('../controllers/contact');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(contactIndex));

// New Route
router.get('/new', asyncErrorHandler(contactNew));

// Create Route
router.post("/", asyncErrorHandler(contactCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(contactShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(contactEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(contactEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(contactUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(contactDestroy));


module.exports = router;
