const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	anchor: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true,
	},
	executive:{
		type: String
	},
	appliedResearch: {
		type: String
	},
	productDev:{
		type: String
	},
	engineeringServ:{
		type: String
	},
	marketing:{
		type: String,
	},
	businessDev:{
		type: String,
	},
	informationTech:{
		type: String,
	},
	businessOps: {
		type: String,
	},
	department: {
		type: String,
		required: true,
	},
	bio: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true,
	},
	howIMesh: {
		type: String,
	},
	linkedIn: {
		type: String,
	},
	twitter: {
		type: String,
	},
});

module.exports = mongoose.model('Staff', staffSchema, 'Staff');
