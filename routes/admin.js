const express = require('express');
const router = express.Router();
const adminCopy = require('../models/admin');
const { asyncErrorHandler } = require('../middleware/index');
const { adminIndex, adminNew, adminCreate, adminEdit, adminEditForm, adminUpdate, adminDestroy } = require('../controllers/admin');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(adminIndex));

// New Route
router.get('/new', asyncErrorHandler(adminNew));

// Create Route
router.post("/", asyncErrorHandler(adminCreate));

// Edit Route
router.get("/page/edit", asyncErrorHandler(adminEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(adminEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(adminUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(adminDestroy));

module.exports = router;
