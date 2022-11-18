import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "./middleware/dbConnect";
import { PositioningElementsModel } from "./models/cssmodels/positionElements";

export default async function handler(
	req: NextRequest,
	res: NextResponse | any
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const PositioningElementsGetData = await PositioningElementsModel.find(
					{}
				);
				res
					.status(200)
					.json({ success: true, data: PositioningElementsGetData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const PositioningElementsPostData =
					await PositioningElementsModel.create(req.body);
				res
					.status(201)
					.json({ success: true, data: PositioningElementsPostData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
