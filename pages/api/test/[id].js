import { testModel } from "../models/testModel";
import { dbConnect } from "../middleware/dbConnect";

export default async function handler(req, res) {
	await dbConnect();
	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case "GET":
			try {
				const getIdData = await testModel.findById(id);

				console.log(getIdData);
				if (!getIdData) {
					return res.status(400).json({ success: false });
				}
				res.status(200).json({ success: true, data: getIdData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const updateIdData = await testModel.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});
				console.log(updateIdData);
				if (!updateIdData) {
					return res.status(400).json({ success: true });
				}
				res.status(200).json({ success: true, data: updateIdData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
		case "DELETE":
			try {
				const deleteIdData = await testModel.deleteOne({ _id: id });
				console.log(deleteIdData);
				if (!deleteIdData) {
					return res.status(400).json({ success: true });
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
