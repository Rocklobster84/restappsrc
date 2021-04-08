const mongoose = require('mongoose');

const pwSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
	},
	productCopy: {
		type: String,
	},
});

module.exports = mongoose.model('PWProducts', pwSchema, 'PWProducts');
