import NextHead from "../utils/NextHead";
import styles from "../styles/Home.module.css";
import HeroCard from "../components/card";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { motion } from "framer-motion";
import useMediaQuery from "../utils/useMediaQuery";

export default function Home({
	content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const matches = useMediaQuery("(max-width: 640px)");
	const CardRender = content.data.slice(0, 4).map((res: any, index: any) => {
		return (
			<motion.div
				initial={
					index === 0
						? { opacity: 0, x: !matches ? 100 : 0, y: matches ? 100 : 0 }
						: index === 3
						? { opacity: 0, x: !matches ? -100 : 0, y: matches ? -100 : 0 }
						: { opacity: 0 }
				}
				animate={
					index === 0
						? { opacity: 1, x: 0, y: 0 }
						: index === 3
						? { opacity: 1, x: 0, y: 0 }
						: { opacity: 1 }
				}
				whileHover={{
					scale: 1.08,
					transition: { duration: 0.4 },
				}}
				whileTap={{ scale: 0.9 }}
				transition={{ duration: 1 }}
				key={index}>
				<HeroCard
					title={res.cardTitle}
					description={res.cardDesc}
					logoText={res.logoText}
					endpoint={res.page}
				/>
			</motion.div>
		);
	});
	return (
		<>
			<NextHead
				title="Learn FullStack development"
				description="Here is the platform to explore new technical skills related to full stack development, machine learning concepts and updated concepts related to development"
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint=""
				type="article"
			/>
			<section className="xl:h-screen w-screen relative bg-gradient-to-r from-cyan-500 to-blue-500 px-20 py-32">
				<motion.h1
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className={`${styles.title} text-4xl sm:text-6xl text-center pb-6`}>
					Stack Web Dev
				</motion.h1>

				<div className="py-6 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{CardRender}
				</div>

				{/* <div className="absolute h-screen w-full bg-green-400 opacity-60 z-0"></div> */}
			</section>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const baseUrl = process.env.HOST;
	const res = await fetch(`${baseUrl}/api/`);
	const content = await res.json();

	console.log(content);
	return {
		props: { content },
	};
};
