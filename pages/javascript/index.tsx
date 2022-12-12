import Image from "next/image";
import React from "react";
import styles from "./adEventListenerpage.module.css";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import NextHead from "../../utils/NextHead";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

function AdEventListener({
	content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	if (!router.isFallback && !content) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			<NextHead
				title="Adding EventListeners in Javascript"
				description="The addEventListener() method is used to attach an event handler to a particular element.It does not override the existing event handlers. Events are said to be an essential part of the JavaScript."
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint="javascript"
				type="article"
			/>
			<section className="text-white">
				{content.data.map((entry: any, index: any) => (
					<div key={index} className="">
						<h1 className="text-3xl sm:text-4xl pb-6">{entry.title}</h1>
						<p className="">{entry?.define}</p>
						<h3 className="py-6 text-2xl sm:text-3xl font-bold">Syntax</h3>
						<div className="bg-white/[0.2] p-10 rounded-lg text-green-400 w-full break-all">
							{entry?.syntax}
						</div>
						<p className="py-6">{entry?.description[0]}</p>
						<div
							className={`${styles.descPtag}`}
							dangerouslySetInnerHTML={{ __html: entry?.description[1] }}></div>
						<div className="py-4 sm:py-6">
							{entry.examples
								?.slice(0, 3)
								?.map((entryNested: any, indexNested: any) => (
									<div key={indexNested}>
										<h2 className="text-2xl sm:text-3xl py-4 sm:py-6">
											Example
										</h2>
										<div
											className="py-4 sm:py-6"
											dangerouslySetInnerHTML={{
												__html: entryNested?.text,
											}}></div>
										<div className="bg-white/[0.2] p-10 rounded-lg text-green-400 w-full my-6 break-all scr">
											{entryNested.code}
										</div>
										<div
											className="py-4 sm:py-6"
											dangerouslySetInnerHTML={{
												__html: entryNested?.outputText,
											}}></div>
										<Image
											width="400"
											height="400"
											src={entryNested?.outputImage}
											alt="Output Image"
										/>
									</div>
								))}
						</div>
					</div>
				))}
			</section>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const baseUrl = process.env.HOST;
	const res = await fetch(`${baseUrl}/api/javascript-page`);
	const content = await res.json();
	return {
		props: { content },
	};
};

export default AdEventListener;
