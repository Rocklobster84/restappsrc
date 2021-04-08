const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
	sectionName: {
		type: String,
	},
	sectionNew: {
		type: String
	},
	sectionEdit: {
		type: String
	}
});

module.exports = mongoose.model('AdminPage', adminSchema, 'AdminPage');
