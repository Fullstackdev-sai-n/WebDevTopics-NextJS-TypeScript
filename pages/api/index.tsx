import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { dbConnect } from "./middleware/dbConnect";
import { HomePageModel } from "./models/homemodel";

export default async function handler(req: NextRequest, res: NextApiResponse) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const getHomepageData = await HomePageModel.find({});
				res.status(200).json({ success: true, data: getHomepageData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const postHomepageData = await HomePageModel.create(req.body);
				res.status(201).json({ success: true, data: postHomepageData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
