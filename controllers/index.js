"use strict";

module.exports = function indexController(req, res, next) {
	res.render("index", { title: "Members Only" });
};
