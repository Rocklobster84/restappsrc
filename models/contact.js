const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
	},
	contactCopy: {
		type: String,
	},
});

module.exports = mongoose.model('Contact', contactSchema, 'Contact');
