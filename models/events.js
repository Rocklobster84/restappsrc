const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	slug: {
		type: String,
	},
	description: {
		type: String,
	},
	subHeading: {
		type: String,
},
	headerImg: {
		type: String,
	},
	copy: {
		type: String,
	},
});

module.exports = mongoose.model('Events', eventsSchema, 'Events');
