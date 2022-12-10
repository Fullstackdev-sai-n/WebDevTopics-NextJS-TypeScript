import { dbConnect } from "../middleware/dbConnect";
import { TypeErrorsModels } from "../models/typemodels/typeModels";

export default async function handler(req: any, res: any) {
	await dbConnect();
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			try {
				const typeError = await TypeErrorsModels.findById(id);

				console.log(typeError);
				if (!typeError) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: typeError });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const typeErrorUpdate = await TypeErrorsModels.findByIdAndUpdate(
					id,
					req.body
				);
				if (!typeErrorUpdate) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: typeErrorUpdate });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "DELETE":
			try {
				const typeErrorDelete = await TypeErrorsModels.deleteOne({ _id: id });
				if (!typeErrorDelete) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: {} });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
