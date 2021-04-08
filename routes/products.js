const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { productsIndex, productsNew, productsCreate, productsShow, productsEdit, productsEditForm, productsUpdate, productsDestroy } = require('../controllers/products');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(productsIndex));

// New Route
router.get('/new', asyncErrorHandler(productsNew));

// Create Route
router.post("/", asyncErrorHandler(productsCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(productsShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(productsEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(productsEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(productsUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(productsDestroy));

module.exports = router;
