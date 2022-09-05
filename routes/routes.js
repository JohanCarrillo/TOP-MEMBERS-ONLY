"use strict";

const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");
const logInController = require("../controllers/logInController");
const indexController = require("../controllers/indexController");
const messageController = require("../controllers/messageController");
const statusController = require("../controllers/statusController");
const passport = require("../service/auth");
const {
	userIsAuth,
	userIsAdmin,
	useIsMember,
} = require("../service/authUtils");

router.get("/", indexController);

router.get("/sign-up", signUpController.signUpGet);
router.post("/sign-up", signUpController.signUpPost);

router.get("/log-out", logInController.logOut);

router.get("/log-in", logInController.logInGet);
router.post("/log-in", logInController.logInPost);

router.get("/message/new", userIsAuth, messageController.createMessageGet);
router.post("/message/new", userIsAuth, messageController.createMessagePost);

router.get("/change-status", userIsAuth, statusController.changeStatusGet);
router.post("/change-status", userIsAuth, statusController.changeStatusPost);

router.get(
	"/message/delete/:id",
	userIsAdmin,
	messageController.deleteMessageGet
);
router.post(
	"/message/delete/:id",
	userIsAdmin,
	messageController.deleteMessagePost
);

module.exports = router;
