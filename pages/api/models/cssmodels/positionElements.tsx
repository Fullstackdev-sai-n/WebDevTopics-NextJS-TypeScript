import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IPositioningElements extends Document {
	title: String;
	info: String;
	postionPropValues: String;
	staticdesc: String;
	relativedesc: String;
	absolutedesc: String;
	fixeddesc: String;
	stickydesc: String;
	description: { title: String; textList: [String]; text: String };
	examples: [
		{
			title: String;
			text: String;
			codeHtml: String;
			codeCSS: String;
			result: {
				imageUrl: String;
			};
		}
	];
}

const PositioningElementsSchema: Schema = new mongoose.Schema({
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

export const PositioningElementsModel: Model<IPositioningElements> =
	mongoose.models.postionElement ||
	model("postionElement", PositioningElementsSchema);
