import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IJavascript extends Document {
	title: String;
	define: String;
	syntax: String;
	examples: [
		{ text: String; code: String; outputText: String; outputImage: String }
	];
	output: [String];
	description: [String];
}

const JavascriptSchema: Schema = new mongoose.Schema({
	title: String,
	define: String,
	syntax: String,
	examples: [
		{ text: String, code: String, outputText: String, outputImage: String },
	],
	description: [String],
});

export const JavascriptModel: Model<IJavascript> =
	mongoose.models.javascript || model("javascript", JavascriptSchema);
