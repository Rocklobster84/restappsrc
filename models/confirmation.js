const mongoose = require('mongoose');

const confirmSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
	},
	confirmCopy: {
		type: String,
	},
});

module.exports = mongoose.model('Confirmation', confirmSchema, 'Confirmation');
