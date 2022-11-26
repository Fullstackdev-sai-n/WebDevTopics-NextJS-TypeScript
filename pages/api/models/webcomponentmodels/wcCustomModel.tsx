import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IWCustomElement extends Document {
	title: String;
	define: String;
	usage: String;
	customEl: String;
}

const WCustomElementSchema: Schema = new mongoose.Schema({
	title: String,
	define: String,
	usage: String,
	customEl: String,
});

export const WCustomElementModel: Model<IWCustomElement> =
	mongoose.models.customelement || model("customelement", WCustomElementSchema);
