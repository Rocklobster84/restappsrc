const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { whitePaperIndex, whitePaperNew, whitePaperCreate, whitePaperShow, whitePaperEditForm, whitePaperUpdate, whitePaperDestroy } = require('../controllers/white-papers');

// Index/Edit Route
router.get('/edit', asyncErrorHandler(whitePaperIndex));

// New Route
router.get('/new', asyncErrorHandler(whitePaperNew));

// Create Route
router.post("/", asyncErrorHandler(whitePaperCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(whitePaperShow));

// Individual Edit Route
router.get("/edit/:id", asyncErrorHandler(whitePaperEditForm));

// Update Route
router.put("/:id", asyncErrorHandler(whitePaperUpdate));

// Destroy Route
router.delete("/:id", asyncErrorHandler(whitePaperDestroy));


module.exports = router;
