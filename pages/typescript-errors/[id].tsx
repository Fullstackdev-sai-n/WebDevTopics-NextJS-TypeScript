import React from "react";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";

type Props = {};

export const getStaticPaths: GetStaticPaths = async () => {
	const res: any = await fetch("http://localhost:3000/api/typescript-errors");
	const data: any = await res.json();
	const response = data.data;
	const paths = response?.map((entry: any) => {
		return {
			params: { id: entry._id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context?.params?.id;

	const res: any = await fetch(
		"http://localhost:3000/api/typescript-errors/" + id
	);
	const data: any = await res.json();
	const response = data.data;
	return {
		props: {
			data: response,
		},
	};
};

function TypeErrorSolutionPage({ data }: any) {
	console.log(data);
	return (
		<section>
			<h1 className="text-3xl py-4 text-green-400 sm:text-5xl sm:py-6 text-center">
				<span>{data.ErrorNo}: </span>
				<span>{data.title}</span>
			</h1>
		</section>
	);
}

export default TypeErrorSolutionPage;
