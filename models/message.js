"use strict";

const { model, Schema } = require("mongoose");

const messageSchema = Schema(
	{
		title: { type: String, require: true, minLength: 1, maxLength: 30 },
		text: { type: String, require: true, minLength: 1, maxLength: 250 },
		user: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);
