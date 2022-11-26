import React from "react";
import { NextSeo } from "next-seo";

export interface IHeadProps {
	title: string;
	description: string;
	url: string;
	canonicalEndpoint: string;
	type: string;
}

function NextHead(props: IHeadProps) {
	const { title, description, url, canonicalEndpoint, type } = props;
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				canonical={
					baseUrl || baseUrl !== ""
						? baseUrl + `/${canonicalEndpoint}`
						: `http://localhost:3000/${canonicalEndpoint}`
				}
				openGraph={{
					url:
						baseUrl || baseUrl !== ""
							? baseUrl + `/${canonicalEndpoint}`
							: `http://localhost:3000/${canonicalEndpoint}`,
					title,
					description,
					type,
					locale: "en_IE",
					images: [
						{
							url: url,
							width: 800,
							height: 600,
							alt: "Og Image Alt",
							type: "image/png",
						},
						{
							url: url,
							width: 900,
							height: 800,
							alt: "Og Image Alt Second",
							type: "image/png",
						},
						{
							url: url,
						},
						{
							url: url,
						},
					],
					siteName: "StackWebDev",
				}}
				twitter={{
					handle: "@sainath",
					site: "@stackwebdev",
					cardType: "summary_large_image",
				}}
				additionalMetaTags={[
					{
						property: "article:tag",
						content: "alt tag",
						keyOverride: "creator1",
					},
					{
						property: "article:tag",
						content: "canonical tag",
						keyOverride: "creator2",
					},
					{
						property: "article:tag",
						content: "header tag",
						keyOverride: "creator3",
					},
					{
						property: "article:tag",
						content: "html",
						keyOverride: "creator4",
					},
					{
						property: "article:tag",
						content: "html tags",
						keyOverride: "creator5",
					},
					{
						property: "article:tag",
						content: "meta description",
						keyOverride: "creator6",
					},
					{
						property: "article:tag",
						content: "meta tags",
						keyOverride: "creator7",
					},
					{
						property: "article:tag",
						content: "open graph",
						keyOverride: "creator8",
					},
					{
						property: "article:tag",
						content: "responsive design meta tag",
						keyOverride: "creator9",
					},
					{
						property: "article:tag",
						content: "robots meta tag",
						keyOverride: "creator10",
					},
					{
						property: "article:tag",
						content: "seo",
						keyOverride: "creator11",
					},
					{
						property: "article:tag",
						content: "title tag",
						keyOverride: "creator12",
					},
					{
						property: "article:tag",
						content: "twitter card",
						keyOverride: "creator13",
					},
					{
						property: "article:section",
						content: "Keyword Research",
						keyOverride: "creator14",
					},
					{
						httpEquiv: "x-ua-compatible",
						content: "IE=edge; chrome=1",
					},
				]}
			/>
		</>
	);
}

export default NextHead;
