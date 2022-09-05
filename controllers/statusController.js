"use strict";

const User = require("../models/user");

function changeStatusGet(req, res, next) {
	res.render("change-status");
}

function changeStatusPost(req, res, next) {
	if (req.body.secret_key === process.env.MEMBER_KEY) {
		User.findByIdAndUpdate(
			req.user.id,
			{ membership_status: "member" },
			{},
			err => {
				if (err) return next(err);
				return res.redirect("/");
			}
		);
	} else if (req.body.secret_key === process.env.ADMIN_KEY) {
		User.findByIdAndUpdate(
			req.user.id,
			{ membership_status: "admin" },
			{},
			err => {
				if (err) return next(err);
				return res.redirect("/");
			}
		);
	} else {
		return res.render("change-status", { message: "Wrong key" });
	}
}

module.exports = {
	changeStatusGet,
	changeStatusPost,
};
