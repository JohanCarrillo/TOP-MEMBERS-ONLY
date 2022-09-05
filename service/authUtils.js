"use strict";

module.exports = function userIsAuth(req, res, next) {
	if (typeof req.user === "undefined") {
		return res.status(403).render("forbidden");
	} else {
		return next();
	}
};
