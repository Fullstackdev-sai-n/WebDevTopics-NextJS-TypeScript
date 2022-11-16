import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export interface ICSS {
	title: string;
	description: string;
}

// 2. Create a Schema corresponding to the document interface.
const cssSchema = new Schema<ICSS>({
	title: { type: String, required: true },
	description: { type: String, required: true },
});

// 3. Create a Model.
const cssModel = model<ICSS>("css", cssSchema);

export default cssModel;
