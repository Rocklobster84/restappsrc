const mongoose = require('mongoose');

const aviationSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Aviation', aviationSchema, 'Aviation');
