import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IMachineLearning extends Document {
	title: String;
	heroImage: String;
	Introduction: String;
	types: String;
	articleOne: String;
	supervisedLearning: String;
	unSupervisedLearning: String;
}

const MachineLearningSchema: Schema = new mongoose.Schema({
	title: String,
	heroImage: String,
	Introduction: String,
	types: String,
	articleOne: String,
	supervisedLearning: String,
	unSupervisedLearning: String,
});

export const MachineLearningModel: Model<IMachineLearning> =
	mongoose.models.machineLearning ||
	model("machineLearning", MachineLearningSchema);
