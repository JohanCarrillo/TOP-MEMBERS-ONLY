"use strict";

const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");
const logInController = require("../controllers/logInController");
const indexController = require("../controllers/index");
const messageController = require("../controllers/messageController");
const passport = require("../service/auth");
const userIsAuth = require("../service/authUtils");

router.get("/", indexController);

router.get("/sign-up", signUpController.signUpGet);
router.post("/sign-up", signUpController.signUpPost);

router.get("/log-out", logInController.logOut);

router.get("/log-in", logInController.logInGet);
router.post("/log-in", logInController.logInPost);

router.get("/message/new", userIsAuth, messageController.createMessageGet);
router.post("/message/new", userIsAuth, messageController.createMessagePost);

// router.get('/message/:id', messageController.readMessage)

// router.get('/message/edit/:id', messageController.editMessageGet)
// router.post('/message/edit/:id', messageController.editMessagePost)

// user routes

module.exports = router;
