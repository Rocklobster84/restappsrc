const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Products', productsSchema, 'Products');
