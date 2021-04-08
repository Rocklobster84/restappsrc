const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { viewerIndex, viewerNew, viewerCreate, viewerShow, viewerEdit, viewerEditForm, viewerUpdate, viewerDestroy } = require('../controllers/viewer');

/* GET Viewer pages */
router.get('/aEakEW8K9DkR2Xbx', asyncErrorHandler(viewerIndex));

// New Route
router.get('/new', asyncErrorHandler(viewerNew));

// Create Route
router.post("/", asyncErrorHandler(viewerCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(viewerShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(viewerEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(viewerEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(viewerUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(viewerDestroy));


module.exports = router;
