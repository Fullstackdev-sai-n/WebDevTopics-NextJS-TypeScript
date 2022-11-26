import styles from "./position-elements.module.css";
import React from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import NextHead from "../../utils/NextHead";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export interface IEntry {
	title:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	info:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	postionPropValues: any;
	staticdesc:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	relativedesc:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	absolutedesc:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	fixeddesc:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	stickydesc:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	description: {
		title:
			| string
			| number
			| boolean
			| React.ReactElement<any, string | React.JSXElementConstructor<any>>
			| React.ReactFragment
			| React.ReactPortal
			| null
			| undefined;
		textList: (
			| string
			| number
			| boolean
			| React.ReactElement<any, string | React.JSXElementConstructor<any>>
			| React.ReactFragment
			| React.ReactPortal
			| null
			| undefined
		)[];
		text:
			| string
			| number
			| boolean
			| React.ReactElement<any, string | React.JSXElementConstructor<any>>
			| React.ReactFragment
			| React.ReactPortal
			| null
			| undefined;
	};
	examples: any[];
}

function PositionElements({
	posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	if (!router.isFallback && !posts) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<NextHead
				title="Positioning elements with CSS position property"
				description="The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements."
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint="css"
				type="article"
			/>
			<section>
				{posts?.data?.map(
					(entry: IEntry, index: React.Key | null | undefined) => (
						<div key={index}>
							<h1 className="text-4xl sm:text-5xl">{entry.title}</h1>
							<p className="py-4">{entry.info}</p>
							<div
								className={`${styles.postionProps} text-green-400`}
								dangerouslySetInnerHTML={{
									__html: entry.postionPropValues,
								}}></div>
							<p className="py-4">
								<b>Static Position</b>: {entry.staticdesc}
							</p>
							<p className="py-4">
								<b>Relative Position</b>: {entry.relativedesc}
							</p>
							<p className="py-4">
								<b>Absolute Position</b>: {entry.absolutedesc}
							</p>
							<p className="py-4">
								<b>Fixed Position</b>: {entry.fixeddesc}
							</p>
							<p className="py-4">
								<b>Sticky Position</b>: {entry.stickydesc}
							</p>
							<div className="py-4">
								<h2 className="text-3xl sm:text-4xl py-4">Description</h2>
								<h3 className="text-2xl sm:text-3xl py-4">
									{entry?.description?.title}
								</h3>
								<ul className="px-6">
									{entry?.description?.textList?.map(
										(
											list:
												| string
												| number
												| boolean
												| React.ReactElement<
														any,
														string | React.JSXElementConstructor<any>
												  >
												| React.ReactFragment
												| React.ReactPortal
												| null
												| undefined,
											i: React.Key
										) => (
											<li className="py-4 list-disc leading-9" key={i}>
												{list}
											</li>
										)
									)}
								</ul>
								<p className="py-4">{entry?.description?.text}</p>
							</div>
							<div className="py-4 my-5">
								<h2 className="text-3xl sm:text-4xl py-4">Examples</h2>
								{entry.examples.map((entry: any, index: React.Key) => (
									<div key={index}>
										<h3 className="text-2xl sm:text-3xl py-4">
											{entry?.title}
										</h3>
										<p className="py-4">{entry?.text}</p>
										<h4 className="text-2xl sm:text-3xl py-4">HTML</h4>
										<div className={`${styles.postionProps}`}>
											<code className="text-green-400 py-6  whitespace-pre-line">
												{entry?.codeHtml}
											</code>
										</div>
										<h4 className="text-2xl sm:text-3xl py-4 pt-10">CSS</h4>
										<div
											className={`${styles.postionProps} mb-10 text-green-400`}>
											<code
												className="text-green-400 whitespace-pre-line"
												dangerouslySetInnerHTML={{
													__html: entry?.codeCSS,
												}}></code>
										</div>
										<div className="pb-10">
											<h4 className="text-2xl pb-4">Output:</h4>
											<div className="w-60 h-60 relative">
												<Image
													layout="fill"
													src={entry?.result?.imageUrl}
													alt="OutputImage"
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)
				)}
			</section>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch("http://localhost:3000/api/css-page");
	const posts = await res.json();
	return {
		props: { posts },
	};
};

export default PositionElements;
