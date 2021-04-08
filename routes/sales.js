const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { salesIndex, salesNew, salesCreate, salesShow, salesEdit, salesEditForm, salesUpdate, salesDestroy } = require('../controllers/sales');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(salesIndex));

// New Route
router.get('/new', asyncErrorHandler(salesNew));

// Create Route
router.post("/", asyncErrorHandler(salesCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(salesShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(salesEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(salesEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(salesUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(salesDestroy));

module.exports = router;
