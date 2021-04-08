const express = require('express');
const router = express.Router();
const NewsPosts = require('../models/news');
const { asyncErrorHandler } = require('../middleware/index');
const { newsIndex, newsNew, newsCreate, newsShow, newsEdit, newsEditForm, newsUpdate, newsDestroy } = require('../controllers/news');

/* GET news entries - Index Route*/
router.get([ '/', '/index.html' ], asyncErrorHandler(newsIndex));

// New Route
router.get('/new', asyncErrorHandler(newsNew));

// Create Route
router.post("/", asyncErrorHandler(newsCreate));

// Show Route
router.get("/:year/:slug", asyncErrorHandler(newsShow));

// Edit Route
router.get("/edit", asyncErrorHandler(newsEdit));

// Individual Edit Route
router.get("/:id", asyncErrorHandler(newsEditForm));

// Update Route
router.put("/:id", asyncErrorHandler(newsUpdate));

// Destroy Route
router.delete("/:id", asyncErrorHandler(newsDestroy));

module.exports = router;
