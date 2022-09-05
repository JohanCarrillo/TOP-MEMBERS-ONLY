"use strict";

const Message = require("../models/message");

module.exports = async function indexController(req, res, next) {
	console.log("index: ", req.user);
	try {
		const messages = await Message.find().populate("user");
		res.render("index", {
			title: "Members Only",
			user: req.user,
			messages: messages,
		});
	} catch (err) {
		return next(err);
	}
};
