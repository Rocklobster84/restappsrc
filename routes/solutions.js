const express = require('express');
const router = express.Router();
const Solution = require('../models/solutions');
const { asyncErrorHandler } = require('../middleware/index');
const { solutionIndex, solutionNew, solutionCreate, solutionEdit, solutionEditForm, solutionUpdate, solutionDestroy } = require('../controllers/solutions');

/* GET solutions entries */
router.get([ '/', '/index.html' ], asyncErrorHandler(solutionIndex));

// New Post Route
router.get('/new', asyncErrorHandler(solutionNew));

// Create Route
router.post("/", asyncErrorHandler(solutionCreate));

// Edit Route
router.get("/edit", asyncErrorHandler(solutionEdit));

// Individual Edit Route
router.get("/edit/:id", asyncErrorHandler(solutionEditForm));

// Update Route
router.put("/:id", asyncErrorHandler(solutionUpdate));

// Destroy Route
router.delete("/:id", asyncErrorHandler(solutionDestroy));

module.exports = router;
