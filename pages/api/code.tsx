import { Schema, model, connect } from "mongoose";
import json from "./test.json";

interface ICSS {
	title: String;
	info: String;
	postionPropValues: String;
	staticdesc: String;
	relativedesc: String;
	absolutedesc: String;
	fixeddesc: String;
	stickydesc: String;
	description: {
		title: String;
		textList: [String];
		text: String;
	};
	examples: [Object];
}

const cssSchema = new Schema<ICSS>({
	title: String,
	info: String,
	postionPropValues: String,
	staticdesc: String,
	relativedesc: String,
	absolutedesc: String,
	fixeddesc: String,
	stickydesc: String,
	description: {
		title: String,
		textList: [String],
		text: String,
	},
	examples: [
		{
			title: String,
			text: String,
			codeHtml: String,
			codeCSS: String,
			result: {
				imageUrl: String,
			},
		},
	],
});

const Css = model<ICSS>("cssone", cssSchema);

run().catch((err) => console.log(err));

async function run() {
	// 4. Connect to MongoDB
	await connect(
		"mongodb+srv://sainathdigi:saibaba1987@cluster0.7i7clvv.mongodb.net/CSSPage"
	);
	console.log(json);

	const css = new Css(json);
	await css.save();
}
