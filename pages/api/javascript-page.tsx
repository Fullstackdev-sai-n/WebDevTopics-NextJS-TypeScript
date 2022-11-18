import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "./middleware/dbConnect";
import { JavascriptModel } from "./models/javascriptmodels/javascriptModel";

export default async function handler(
	req: NextRequest,
	res: NextResponse | any
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const getJavascriptData = await JavascriptModel.find({});
				res.status(200).json({ success: true, data: getJavascriptData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const postJavascriptData = await JavascriptModel.create(req.body);
				res.status(201).json({ success: true, data: postJavascriptData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
