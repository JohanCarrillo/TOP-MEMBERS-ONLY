"use strict";

const User = require("../models/user");
const passport = require("../service/auth");
const { body, validationResult } = require("express-validator");

function logInGet(req, res, next) {
	res.render("log-in");
}

function logInPost(req, res, next) {
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/log-in",
	})(req, res, next);
	// aythenticate is a middleware function, if you dont pass it as midleware
	// you have to manually call it by sending the req, res, next objects
}

function logOut(req, res) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
}

module.exports = {
	logInGet,
	logInPost,
	logOut,
};
