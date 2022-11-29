import React from "react";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	const paths = data.map((user: any) => {
		return {
			params: { id: user.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context?.params?.id;

	console.log(id);

	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();

	return {
		props: {
			user: data,
		},
	};
};

function Questions({ user }: any) {
	console.log(user);
	return <div>{user.name}</div>;
}

export default Questions;
