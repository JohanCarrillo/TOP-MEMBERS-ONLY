"use strict";

const Message = require("../models/message");
const { body, validationResult } = require("express-validator");

function createMessageGet(req, res, next) {
	res.render("create-message");
}

const createMessagePost = [
	body("title").trim().isLength({ min: 1 }).escape(),
	body("text").trim().isLength({ min: 1 }).escape(),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const message = {
				title: req.body.title,
				text: req.body.text,
			};
			res.render("create-message", {
				message: message,
				errors: errors.array(),
			});
			return;
		} else {
			const message = new Message({
				title: req.body.title,
				text: req.body.text,
				user: req.user.id,
			}).save(err => {
				if (err) {
					return next(err);
				}
				return res.redirect("/");
			});
		}
	},
];

function deleteMessageGet(req, res, next) {
	res.send("page in construction");
}

function deleteMessagePost(req, res, next) {
	res.send("page in construction");
}

module.exports = {
	createMessageGet,
	createMessagePost,
	deleteMessageGet,
	deleteMessagePost,
};
