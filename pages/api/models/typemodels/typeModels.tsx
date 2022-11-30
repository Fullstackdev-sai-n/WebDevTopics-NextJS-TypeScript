import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface ITypeErrors extends Document {
	slugline: String;
	ErrorNo: String;
	title: String;
	solution: {
		description: [String];
		codeBlock: [String];
		author: String;
		list: [String];
	};
}

const TypeErrorsModelsSchema: Schema = new mongoose.Schema({
	slugline: String,
	ErrorNo: String,
	title: String,
	solution: {
		description: [String],
		codeBlock: [String],
		author: String,
		list: [String],
	},
});

export const TypeErrorsModels: Model<ITypeErrors> =
	mongoose.models.typeerrors || model("typeerrors", TypeErrorsModelsSchema);
