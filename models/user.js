"use strict";

const { model, Schema } = require("mongoose");

const userSchema = new Schema(
	{
		first_name: { type: String, require: true, minLength: 1, maxLength: 30 },
		last_name: { type: String, require: true, minLength: 1, maxLength: 30 },
		email: { type: String, require: true, minLength: 1, maxLength: 30 },
		password: { type: String, require: true, minLength: 10 },
		membership_status: { type: String, default: "free" },
	},
	{
		virtuals: {
			url: {
				get() {
					return "/user/" + this.id;
				},
			},
			fullName: {
				get() {
					return `${this.first_name} ${this.Schemalast_name}`;
				},
			},
		},
	}
);

/* userSchema.virtual("url").get(function () {
	return "/user/" + this.id;
});
userSchema.virtual("fullName").get(function () {
	return `${this.first_name} ${this.last_name}`;
}); */

module.exports = model("User", userSchema, "users");
