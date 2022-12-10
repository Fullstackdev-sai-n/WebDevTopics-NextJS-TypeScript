import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { dbConnect } from "../middleware/dbConnect";
import { TypeErrorsModels } from "../models/typemodels/typeModels";

export default async function handler(req: NextRequest, res: NextApiResponse) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const getTypeErrorsData = await TypeErrorsModels.find({});
				res.status(200).json({ success: true, data: getTypeErrorsData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const postTypeErrorsData = await TypeErrorsModels.create(req.body);
				res.status(201).json({ success: true, data: postTypeErrorsData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
