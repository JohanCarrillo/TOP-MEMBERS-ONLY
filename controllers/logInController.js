"use strict";

const User = require("../models/user");
const passport = require("passport");

function logInGet(req, res, next) {
	console.log(req.sessionID, req.session);
	res.render("log-in");
}

function logInPost(req, res, next) {
	console.log(req.sessionID, req.session);
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/log-in",
	});
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
