import React from "react";
import NextHead from "../../utils/NextHead";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export interface IWC {
	title: string;
	define: string;
	usage: string;
	customEl: string;
}

function WebComponents({
	content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	if (!router.isFallback && !content) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			<NextHead
				title="Web Development Future Web Components with no Framework"
				description="Web Components is a suite of different technologies allowing you to create reusable custom elements. Three main featured required to understand web component is Custom elements, Shadow DOM and HTML templates"
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint="webcomponents"
				type="article"
			/>
			<section>
				{content.data.map((entry: IWC, index: React.Key) => (
					<div key={index} className="">
						<h1 className="text-3xl sm:text-4xl pb-4">{entry.title}</h1>
						<p className="py-4">{entry?.define}</p>
						<h2 className="py-4 text-2xl">
							How to implement and use WebComponents
						</h2>
						<div dangerouslySetInnerHTML={{ __html: entry?.usage }}></div>
						<div dangerouslySetInnerHTML={{ __html: entry?.customEl }}></div>
					</div>
				))}
			</section>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(
		"https://stackwebdev.vercel.app/api/webcomponents-page"
	);
	const content = await res.json();
	return {
		props: { content },
	};
};

export default WebComponents;
