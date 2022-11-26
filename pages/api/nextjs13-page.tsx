import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { dbConnect } from "./middleware/dbConnect";
import { nextJs13OverviewModel } from "./models/nextjsmodels/nextjs13Model";

export default async function handler(req: NextRequest, res: NextApiResponse) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const getNextJs13OverviewData = await nextJs13OverviewModel.find({});
				res.status(200).json({ success: true, data: getNextJs13OverviewData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const postNextJs13OverviewData = await nextJs13OverviewModel.create(
					req.body
				);
				res.status(201).json({ success: true, data: postNextJs13OverviewData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
