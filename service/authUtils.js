"use strict";

function userIsAuth(req, res, next) {
	if (typeof req.user === "undefined") {
		return res.redirect("/log-in");
		// return res.status(403).render("forbidden");
	} else {
		return next();
	}
}

function userIsMember(req, res, next) {
	if (req.user.membership_status === "free") {
		return res.redirect("/log-in");
		// return res.status(403).render("forbidden");
	} else {
		return next();
	}
}

function userIsAdmin(req, res, next) {
	if (req.user.membership_status !== "admin") {
		return res.redirect("/log-in");
		// return res.status(403).render("forbidden");
	} else {
		return next();
	}
}

module.exports = {
	userIsAdmin,
	userIsAuth,
	userIsMember,
};
