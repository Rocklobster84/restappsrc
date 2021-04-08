const mongoose = require('mongoose');

const webcastsSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	directory: {
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

module.exports = mongoose.model('Webcasts', webcastsSchema, 'Webcasts');
