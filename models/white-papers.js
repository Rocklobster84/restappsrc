const mongoose = require('mongoose');

const whitePaperSchema = new mongoose.Schema({
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
	ymal1Title: {
		type: String,
	},
	ymal1Img: {
		type: String,
	},
	ymal1Alt: {
		type: String,
	},
	ymal1Url: {
		type: String,
	},
	ymal2Title: {
		type: String,
	},
	ymal2Img: {
		type: String,
	},
	ymal2Alt: {
		type: String,
	},
	ymal2Url: {
		type: String,
	},
	ymal3Title: {
		type: String,
	},
	ymal3Img: {
		type: String,
	},
	ymal3Alt: {
		type: String,
	},
	ymal3Url: {
		type: String,
	},
	gated: {
		type: Boolean,
	},
});

module.exports = mongoose.model('WhitePapers', whitePaperSchema, 'WhitePapers');
