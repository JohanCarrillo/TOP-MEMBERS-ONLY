"use strict";

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const session = require("express-session");
const passport = require("./service/auth");
const router = require("./routes/routes");

mongoose.connect(process.env.DB_CONNECTION, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// create session
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler function
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
