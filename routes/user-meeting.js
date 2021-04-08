const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { userMeetingIndex, userMeetingNew, userMeetingCreate, userMeetingShow, userMeetingEdit, userMeetingEditForm, userMeetingUpdate, userMeetingDestroy } = require('../controllers/user-meeting');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(userMeetingIndex));

// New Route
router.get('/new', asyncErrorHandler(userMeetingNew));

// Create Route
router.post("/", asyncErrorHandler(userMeetingCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(userMeetingShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(userMeetingEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(userMeetingEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(userMeetingUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(userMeetingDestroy));

module.exports = router;
