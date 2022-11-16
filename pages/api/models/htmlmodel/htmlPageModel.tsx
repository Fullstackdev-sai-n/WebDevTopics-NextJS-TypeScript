import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export interface IHtml {
	title: string;
	description: string;
}

// 2. Create a Schema corresponding to the document interface.
const htmlSchema = new Schema<IHtml>({
	title: { type: String, required: true },
	description: { type: String, required: true },
});

// 3. Create a Model.
const HTMLmodel = model<IHtml>("html", htmlSchema);
