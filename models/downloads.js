const mongoose = require('mongoose');

const downloadsSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Downloads', downloadsSchema, 'Downloads');
