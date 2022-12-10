import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IHomePage extends Document {
	page: String;
	cardTitle: String;
	cardDesc: String;
	logoText: String;
}

const HomePageSchema: Schema = new mongoose.Schema({
	page: String,
	cardTitle: String,
	cardDesc: String,
	logoText: String,
});

export const HomePageModel: Model<IHomePage> =
	mongoose.models.homeschema || model("homeschema", HomePageSchema);
