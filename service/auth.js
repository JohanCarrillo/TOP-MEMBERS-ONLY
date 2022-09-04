"use strict";

const { compare } = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const passport = require("passport");

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		(username, password, done) => {
			// done(err, user)=>{}
			User.findOne({ email: username }, (err, user) => {
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
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});

module.exports = passport;
