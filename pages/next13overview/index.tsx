import React from "react";
import NextHead from "../../utils/NextHead";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export interface INext13 {
	title: string;
	html: string;
}

function Next13overview({
	content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	if (!router.isFallback && !content) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			<NextHead
				title="New Features in NextJS 13 version step by step"
				description="NextJS 13 Release came up with updated and new features like new app folder structure, next/image tag optimization, next/link no need to add anchor tag separetely renders with Image tag itself and few of them additionally"
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint="next13overview"
				type="article"
			/>
			<section>
				{content.data.map((entry: INext13, index: React.Key) => (
					<div key={index} className="">
						<h1 className="text-3xl sm:text-4xl pb-4">{entry.title}</h1>
						<div
							className="nextjs-13-content break-words text-white"
							dangerouslySetInnerHTML={{ __html: entry.html }}></div>
					</div>
				))}
			</section>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const baseUrl = process.env.HOST;
	const res = await fetch(`${baseUrl}/api/nextjs13-page`);
	const content = await res.json();
	return {
		props: { content },
	};
};

export default Next13overview;
