const mongoose = require('mongoose');

const viewerSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	imgBack: {
		type: String,
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
	},
	copy: {
		type: String,
	},
});

module.exports = mongoose.model('Viewer', viewerSchema, 'Viewer');
