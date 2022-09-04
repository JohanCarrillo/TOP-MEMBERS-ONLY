"use strict";

const { compare } = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

const newLocalStrategy = new LocalStrategy((username, password, done) => {
	// done(err, user)=>{}
	User.findOne({ username: username }, (err, user) => {
		if (err) {
			return done(err);
		}
		if (!user) {
			console.log("No user found");
			return done(null, false, { message: "Incorrect username" });
		}
		compare(password, user.password, (err, res) => {
			if (res) {
				return done(null, user);
			} else {
				return done(null, false, { message: "Incorrect password" });
			}
		});
	});
});

const deserializer = (id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
};

const serializer = (user, done) => {
	done(null, user.id);
};

module.exports = {
	newLocalStrategy,
	deserializer,
	serializer,
};
