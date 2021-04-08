const mongoose = require('mongoose');

const teachSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	subHeading: {
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

module.exports = mongoose.model('Teaching', teachSchema, 'Teaching');
