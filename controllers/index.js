"use strict";

module.exports = function indexController(req, res, next) {
	console.log(req.user);
	res.render("index", { title: "Members Only" });
};
