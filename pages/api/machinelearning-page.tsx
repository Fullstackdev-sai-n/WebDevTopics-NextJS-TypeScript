import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { dbConnect } from "./middleware/dbConnect";
import { MachineLearningModel } from "./models/machinelearningmodels/machinelearningModel";

export default async function handler(req: NextRequest, res: NextApiResponse) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const getMachineLearningData = await MachineLearningModel.find({});
				res.status(200).json({ success: true, data: getMachineLearningData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const postMachineLearningData = await MachineLearningModel.create(
					req.body
				);
				res.status(201).json({ success: true, data: postMachineLearningData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
