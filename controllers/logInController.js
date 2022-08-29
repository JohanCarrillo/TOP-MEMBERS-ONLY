"use strict";

const User = require("../models/user");
const { authenticate } = require("passport");

function logInGet(req, res, next) {
	res.render("log-in");
}

function logInPost(req, res, next) {
	res.send(req.body);
	// authenticate("local", {
	// 	successRedirect: "/",
	// 	failureRedirect: "/", // edit
	// });
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
