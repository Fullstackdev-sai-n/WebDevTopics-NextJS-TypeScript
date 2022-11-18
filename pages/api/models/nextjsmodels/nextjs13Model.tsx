import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface INextjs13 extends Document {
	title: String;
	html: String;
}

const NextJs13Overview: Schema = new mongoose.Schema({
	title: String,
	html: String,
});

export const nextJs13OverviewModel: Model<INextjs13> =
	mongoose.models.nextjs13overview ||
	model("nextjs13overview", NextJs13Overview);
