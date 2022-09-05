"use strict";

module.exports = function indexController(req, res, next) {
	console.log("index: ", req.user);
	res.render("index", { title: "Members Only", user: req.user });
};
