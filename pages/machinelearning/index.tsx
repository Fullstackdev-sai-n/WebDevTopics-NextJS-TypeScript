import Image from "next/image";
import React from "react";

import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import NextHead from "../../utils/NextHead";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export interface IMLEntry {
	title: string;
	Introduction: string;
	heroImage: string;
	types: any;
	articleOne: string;
	supervisedLearning: string;
	unSupervisedLearning: string;
}

function MachineLearning({
	content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	if (!router.isFallback && !content) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<>
			<NextHead
				title="What is Machine Learning"
				description="Machine learning is the field of study that gives computers the ability to learn without being explicitly programmed.Two major types of machine learning algorithms Supervised Learning Unsupervised Learning"
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint="machinelearning"
				type="article"
			/>
			<section>
				{content.data.map((entry: IMLEntry, index: React.Key) => (
					<div key={index} className="">
						<h1 className="text-3xl sm:text-4xl pb-4">{entry.title}</h1>
						<div className="grid grid-cols-2 gap-20">
							<div className="w-full h-80 relative rounded-lg">
								<Image
									className="rounded-lg"
									src={entry.heroImage}
									layout="fill"
									alt="ml-hero-image"
								/>
							</div>
							<div></div>
						</div>
						<p className="text-md sm:py-6 py-4">{entry?.Introduction}</p>
						<div
							className="ml-types-container"
							dangerouslySetInnerHTML={{ __html: entry?.types }}></div>
						<p className="py-4">{entry?.articleOne}</p>
						<div>
							<h2 className="text-2xl py-4">Supervised Learning</h2>
							<div
								className="py-4"
								dangerouslySetInnerHTML={{
									__html: entry?.supervisedLearning,
								}}></div>
						</div>
						<div>
							<h2 className="text-2xl py-4">Unsupervised Learning</h2>
							<div
								className="py-4"
								dangerouslySetInnerHTML={{
									__html: entry?.unSupervisedLearning,
								}}></div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const baseUrl = process.env.HOST;
	const res = await fetch(`${baseUrl}/api/machinelearning-page`);
	const content = await res.json();
	return {
		props: { content },
	};
};

export default MachineLearning;
