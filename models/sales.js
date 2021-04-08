const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	subHeader: {
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
	rfqCopy: {
		type: String,
	}
});

module.exports = mongoose.model('Sales', salesSchema, 'Sales');
