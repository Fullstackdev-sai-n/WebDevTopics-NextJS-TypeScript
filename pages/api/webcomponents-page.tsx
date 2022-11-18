import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "./middleware/dbConnect";
import { WCustomElementModel } from "./models/webcomponentmodels/wcCustomModel";

export default async function handler(
	req: NextRequest,
	res: NextResponse | any
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const getWCustomElementData = await WCustomElementModel.find({});
				res.status(200).json({ success: true, data: getWCustomElementData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const postWCustomElementData = await WCustomElementModel.create(
					req.body
				);
				res.status(201).json({ success: true, data: postWCustomElementData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
