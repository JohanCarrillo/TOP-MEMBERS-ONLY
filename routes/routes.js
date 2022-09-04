"use strict";

const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");
const logInController = require("../controllers/logInController");
const indexController = require("../controllers/index");
const passport = require("../service/auth");

router.get("/", indexController);

router.get("/sign-up", signUpController.signUpGet);
router.post("/sign-up", signUpController.signUpPost);

router.get("log-out", logInController.logOut);

router.get("/log-in", logInController.logInGet);
router.post("/log-in", logInController.logInPost);

module.exports = router;
