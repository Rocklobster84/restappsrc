const express = require('express');
const router = express.Router();
const PWProducts = require('../models/pointwise');
const { asyncErrorHandler } = require('../middleware/index');
const { pwIndex, pwNew, pwCreate, pwShow, pwEdit, pwEditForm, pwUpdate, pwDestroy } = require('../controllers/pointwise');

/* GET Product Pages - Index Route*/
router.get([ '/', '/index.html' ], asyncErrorHandler(pwIndex));

// New Route
router.get('/new', asyncErrorHandler(pwNew));

// Create Route
router.post("/", asyncErrorHandler(pwCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(pwShow));

// Edit Route
router.get("/product/edit", asyncErrorHandler(pwEdit));

// Individual Edit Route - Shows form
router.get("/product/:id", asyncErrorHandler(pwEditForm));

// Update Route
router.put("/product/:id", asyncErrorHandler(pwUpdate));

// Destroy Route
router.delete("/product/:id", asyncErrorHandler(pwDestroy));

module.exports = router;
