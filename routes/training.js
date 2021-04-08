const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { trainingIndex, trainingNew, trainingCreate, trainingShow, trainingEdit, trainingEditForm, trainingUpdate, trainingDestroy } = require('../controllers/training');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(trainingIndex));

// New Route
router.get('/new', asyncErrorHandler(trainingNew));

// Create Route
router.post("/", asyncErrorHandler(trainingCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(trainingShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(trainingEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(trainingEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(trainingUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(trainingDestroy));

module.exports = router;

