import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	const res: any = await fetch(`${process.env.HOST}/api/typescript-errors`);
	const data: any = await res.json();

	return {
		props: {
			response: data.data,
		},
	};
};

function index({ response }: any) {
	return (
		<section>
			<h1 className="text-3xl sm:text-5xl text-center py-4 sm:py-6">
				List of Common TypeScript Errors
			</h1>
			<ul className="list-decimal px-2 sm:px-4 font-bold">
				{response?.map((entry: any, index: any) => {
					return (
						<li key={entry._id} className="py-4 sm:py-6">
							<p>
								<span className="text-xl sm:text-2xl text-green-400">
									TypeScriptError:
								</span>{" "}
								<span className="text-xl sm:text-2xl font-normal text-blue-400">
									<Link href={"/typescript-errors/" + entry._id}>
										{entry.title}
									</Link>
								</span>
							</p>
							<p>
								<span className="text-xl sm:text-2xl text-green-400">
									TypeScriptErrorNumber:
								</span>{" "}
								<span className="text-xl sm:text-2xl font-normal text-blue-400">
									<Link href={"/typescript-errors/" + entry._id.toString()}>
										{entry.ErrorNo}
									</Link>
								</span>
							</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default index;
