const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware/index');
const { wallpaperIndex, wallpaperNew, wallpaperCreate, wallpaperShow, wallpaperEdit, wallpaperEditForm, wallpaperUpdate, wallpaperDestroy } = require('../controllers/wallpaper');

/* GET news entries - Index Route*/
router.get('/', asyncErrorHandler(wallpaperIndex));

// New Route
router.get('/new', asyncErrorHandler(wallpaperNew));

// Create Route
router.post("/", asyncErrorHandler(wallpaperCreate));

// Show Route
router.get("/:slug", asyncErrorHandler(wallpaperShow));

// Edit Route
router.get("/page/edit", asyncErrorHandler(wallpaperEdit));

// Individual Edit Route - Shows form
router.get("/page/:id", asyncErrorHandler(wallpaperEditForm));

// Update Route
router.put("/page/:id", asyncErrorHandler(wallpaperUpdate));

// Destroy Route
router.delete("/page/:id", asyncErrorHandler(wallpaperDestroy));

module.exports = router;
