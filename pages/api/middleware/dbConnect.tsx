import mongoose, { Error } from "mongoose";

let cached: any = global.mongoose;

const MONGODB_URI: string = `mongodb+srv://stackwebdev:oE52n2tF55QnyL2G@cluster0.aren1y6.mongodb.net/StackWebDev`;

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

if (!cached) {
	cached = { conn: null, promise: null };
}

export async function dbConnect() {
	if (cached.conn) {
		console.log("connected to DB!");
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false,
		};

		cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
			return mongoose;
		});
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}
	return cached.conn;
}
