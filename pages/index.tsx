import Image from "next/image";
import homeBg from "../public/homeBg.jpg";
import NextHead from "../utils/NextHead";
import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import SpaceDust from "../components/Particles";

export default function Home() {
	const TeslaModel = lazy(() => import("../components/teslaBot"));
	const MainTitleModel = lazy(() => import("../components/Title"));
	const DesktopModel = lazy(() => import("../components/Desktop"));

	return (
		<>
			<NextHead
				title="Learn FullStack development"
				description="Here is the platform to explore new technical skills related to full stack development, machine learning concepts and updated concepts related to development"
				url="https://stack-web-dv.s3.ap-south-1.amazonaws.com/positionimages.png"
				canonicalEndpoint="/"
				type="article"
			/>
			<section className="pb-10 h-screen w-screen relative">
				<Image
					className=""
					layout="fill"
					placeholder="blur"
					src={homeBg}
					alt=""
				/>{" "}
				<Canvas>
					<OrbitControls />
					<directionalLight intensity={0.5} />
					<ambientLight intensity={0.4} />
					<MainTitleModel />
				</Canvas>
				<div className="absolute top-0 bg-green-400 opacity-60 h-full w-full">
					<Canvas>
						<OrbitControls />
						<directionalLight intensity={0.5} />
						<ambientLight intensity={0.4} />

						<DesktopModel />
					</Canvas>
				</div>
			</section>
		</>
	);
}
