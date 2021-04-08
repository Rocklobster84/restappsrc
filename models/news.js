const mongoose = require('mongoose');
//import the slug package
const slug = require('mongoose-slug-generator');
const	options = {separator: "-",
		lang: "en"};
//Initialize slug plugin
mongoose.plugin(slug, options);

const newsSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	slug: {
		type: String,
		slug: "title"
	},
	year: {
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
	displayDate: {
		type: String,
	},
	imgMain: {
		type: String,
	},
	imgCaption: {
		type: String,
	},
	newsRelease: {
		type: String,
	},
});

module.exports = mongoose.model('NewsPosts', newsSchema, 'NewsPosts');
