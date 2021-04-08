const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	abstract: {
		type: String,
	},
	postUrl: {
		type: String,
	},
	imgUrl: {
		type: String,
	},
	imgAltText: {
		type: String,
	},
	postDate: {
		type: Date,
		default: Date.now,
	},
	tags: [ String ]
});


module.exports = mongoose.model('Solutions', solutionSchema, 'Solutions');
