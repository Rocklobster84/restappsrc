const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { servicesIndex, servicesNew, servicesCreate, servicesShow, servicesEdit, servicesEditForm, servicesUpdate, servicesDestroy } = require('../controllers/services');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(servicesIndex));

// New Route
router.get('/new', asyncErrorHandler(servicesNew));

// Create Route
router.post("/", asyncErrorHandler(servicesCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(servicesShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(servicesEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(servicesEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(servicesUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(servicesDestroy));

module.exports = router;
