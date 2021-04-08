const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { eventsIndex, eventsNew, eventsCreate, eventsShow, eventsEdit, eventsEditForm, eventsUpdate, eventsDestroy } = require('../controllers/events');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(eventsIndex));

// New Route
router.get('/new', asyncErrorHandler(eventsNew));

// Create Route
router.post("/", asyncErrorHandler(eventsCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(eventsShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(eventsEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(eventsEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(eventsUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(eventsDestroy));

module.exports = router;
