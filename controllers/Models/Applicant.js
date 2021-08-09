const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		unique: true,
		required: true,
	},
	lastName: {
		type: String,
		trim: true,
		unique: true,
		required: true,
	},
	dateOfBirth: {
		type: String,
		trim: true,
		unique: true,
		required: true,
	},
	city: {
		type: String,
		trim: true,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		unique: true,
		required: true,
	},
	phoneNumber: {
		type: String,
		trim: true,
		unique: true,
		required: true,
	},
});

module.exports = mongoose.model('applicant', ApplicantSchema);
