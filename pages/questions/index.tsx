import React from "react";
import { GetServerSideProps } from "next";
import { Link } from "@mui/material";

type Props = {};

function index({ data }: any) {
	return (
		<div>
			{data.map((entry: any, id: any) => (
				<div key={entry.id}>
					<Link href={"/questions/" + entry.id.toString()}>{entry.name}</Link>
				</div>
			))}
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const json = await res.json();

	return {
		props: { data: json },
	};
};

export default index;
