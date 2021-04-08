const express = require('express');
const router = express.Router();
const confirmCopy = require('../models/confirmation');
const { asyncErrorHandler } = require('../middleware/index');
const { confirmIndex, confirmNew, confirmCreate, confirmShow, confirmEdit, confEditForm, confUpdate, confDestroy } = require('../controllers/confirmation');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(confirmIndex));

// New Route
router.get('/new', asyncErrorHandler(confirmNew));

// Create Route
router.post("/", asyncErrorHandler(confirmCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(confirmShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(confirmEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(confEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(confUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(confDestroy));


module.exports = router;
