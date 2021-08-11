const axios = require('axios');
const Applicant = require('../Models/Applicant');

const applyFunc = async (req, res) => {
	try {
		const { firstName, lastName, dateOfBirth, city, email, phoneNumber } =
			req.body;

		const newApplicant = new Applicant({
			firstName,
			lastName,
			dateOfBirth,
			city,
			email,
			phoneNumber,
		});

		const savedApplicant = await newApplicant.save();

		res.json({
			savedApplicant,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	applyFunc,
};
