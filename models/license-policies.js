const mongoose = require('mongoose');

const licensePoliciesSchema = new mongoose.Schema({
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

module.exports = mongoose.model('LicensePolicies', licensePoliciesSchema, 'LicensePolicies');
