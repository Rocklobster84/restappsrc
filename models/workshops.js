const mongoose = require('mongoose');

const workshopsSchema = new mongoose.Schema({
	title: {
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
	gated: {
		type: Boolean,
	},
});

module.exports = mongoose.model('Workshops', workshopsSchema, 'Workshops');
