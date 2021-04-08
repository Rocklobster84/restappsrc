const mongoose = require('mongoose');

const caseStudiesSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	abstract: {
		type: String,
	},
	caseStudy: {
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
author: {
		type: String,
},
	clientName: {
		type: String,
	},
	clientLogo: {
		type: String,
	},
	clientSinceHead: {
		type: String,
	},
	clientSince: {
		type: String,
	},
	clientAboutHead: {
		type: String,
	},
	clientAbout: {
		type: String,
	},
	challenge: {
		type: String,
	},
	solution: {
		type: String,
	},
	benefit: {
		type: String,
	},
	references:
		[ String ],
	ymal1Title: {
		type: String,
	},
	ymal1Img: {
		type: String,
	},
	ymal1Alt: {
		type: String,
	},
	ymal1Abstract: {
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
	ymal2Abstract: {
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
	ymal3Abstract: {
		type: String,
	},
	ymal3Url: {
		type: String,
	},
	gated: {
		type: Boolean,
	},
	ctaBarTitleA: {
		type: String
	},
	ctaButtonA: {
		type: String
	},
	ctaAltA: {
		type: String,
	},
	ctaBarTitleB: {
		type: String
	},
	ctaButtonB: {
		type: String
	},
	ctaAltB: {
		type: String
	}
});

module.exports = mongoose.model('CaseStudies', caseStudiesSchema, 'CaseStudies');
