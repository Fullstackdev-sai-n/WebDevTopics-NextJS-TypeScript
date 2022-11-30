import mongoose, { Document, model, Model, Schema } from "mongoose";

const testSchema = new mongoose.Schema({
	id: Number,
	title: String,
});

export const testModel =
	mongoose.models.testschema || model("testschema", testSchema);
