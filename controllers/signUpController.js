"use strict";

const User = require("../models/user");
const { hash } = require("bcryptjs");

function signUpGet(req, res, next) {
	res.render("sing-up");
}

function signUpPost(req, res, next) {
	// check if user email is in use

	// if yes error

	// else encrypt password and save
	hash(req.body.password, 10, (err, hashedPassword) => {
		if (err) return next(err);
		const user = new User({
			username: req.body.username,
			password: hashedPassword,
		}).save(err => {
			if (err) {
				return next(err);
			}
			res.redirect("/");
		});
	});
}

module.exports = {
	signUpGet,
	signUpPost,
};
