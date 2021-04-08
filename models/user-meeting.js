const mongoose = require('mongoose');

const userMeetingSchema = new mongoose.Schema({
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

module.exports = mongoose.model('UserMeeting', userMeetingSchema, 'UserMeeting');
