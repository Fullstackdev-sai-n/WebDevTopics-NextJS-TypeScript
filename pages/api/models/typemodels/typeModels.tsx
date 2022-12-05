import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface ITypeErrors extends Document {
	slugline: String;
	ErrorNo: String;
	title: String;
	solution: {
		brokenCode: String;
		fixedText: String;
		fixedCode: String;
		altPrimaryText?: String;
		altPrimaryCode?: String;
		altSecondaryText?: String;
		altSecondaryCode?: String;
		altThirdText?: String;
		altThirdCode?: String;
		extras: [String];
	};
}

const TypeErrorsModelsSchema: Schema = new mongoose.Schema({
	slugline: String,
	ErrorNo: String,
	title: String,
	solution: {
		brokenCode: String,
		fixedText: String,
		fixedCode: String,
		altPrimaryText: String,
		altPrimaryCode: String,
		altSecondaryText: String,
		altSecondaryCode: String,
		altThirdText: String,
		altThirdCode: String,
		extras: [String],
	},
});

export const TypeErrorsModels: Model<ITypeErrors> =
	mongoose.models.typeerrors || model("typeerrors", TypeErrorsModelsSchema);
