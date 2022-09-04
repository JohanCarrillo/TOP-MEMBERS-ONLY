"use strict";

const User = require("../models/user");
const { hash } = require("bcryptjs");
const { body, validationResult } = require("express-validator");

function signUpGet(req, res, next) {
	console.log(typeof user === "undefined");
	res.render("sign-up");
}

const signUpPost = [
	body("first_name", "first name cannot be empty")
		.trim()
		.isLength({ min: 1 })
		.escape(),
	body("last_name", "last name cannot be empty")
		.trim()
		.isLength({ min: 1 })
		.escape(),
	body("email").custom(value => {
		User.find({ email: value }).catch(user => {
			if (user) {
				return Promise.reject("Email already in use");
			}
		});
		return true;
	}),
	body("password", "password must be at least 5 characters").isLength({
		min: 5,
	}),
	body("password_confirmation").custom((value, { req }) => {
		if (value !== req.body.password) {
			throw Error("Password confirmation does not match password");
		}
		return true;
	}),

	(req, res, next) => {
		const errors = validationResult(req);
		console.log(errors.array());
		if (!errors.isEmpty()) {
			const user = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
			};
			res.render("sign-up", {
				user: user,
				errors: errors.array(),
			});
			return;
		} else {
			console.log("before sign up", req.body);
			hash(req.body.password, 10, (err, hashedPassword) => {
				if (err) return next(err);
				const user = new User({
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: hashedPassword,
					membership_status: undefined,
				}).save(err => {
					if (err) {
						return next(err);
					}
					res.redirect("/");
				});
				console.log("after sign up", req.body);
			});
		}
	},
];

module.exports = {
	signUpGet,
	signUpPost,
};
