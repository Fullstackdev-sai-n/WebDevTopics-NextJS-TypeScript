import Image from "next/image";
import Link from "next/link";
import homeBg from "../public/homeBg.jpg";
import NextHead from "../utils/NextHead";
import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function Home() {
	const ModelComponent = lazy(() => import("../components/test"));
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
				/>
				<Suspense fallback={"loading"}>
					<Canvas camera={{ position: [1, 1, 1] }}>
						<ModelComponent />
						<color attach="background" args={["hotpink"]} />
					</Canvas>
				</Suspense>

				<div className="absolute top-0 bg-green-400 opacity-60 h-full w-full"></div>
				<div className="grid absolute mx-auto right-0 left-0 top-24 px-6 sm:px-24 pb-10">
					<h1 className="text-3xl sm:text-6xl text-black home-title-animation py-6">
						&lt;STACK WEB DEV&gt;
					</h1>
					{/* <div className="grid bg-slate-100/20 rounded-lg p-2 place-items-center text-black shadow-black">
						<ul className="">
							<Link href="/typescript-errors">
								<li className="py-4 px-4 text-2xl hover:text-3xl">
									TypeScipt Errors List
								</li>
							</Link>
							<Link href="/css">
								<li className="py-4 text-2xl hover:text-3xl">
									CSS Positioning Elements
								</li>
							</Link>
							<Link href="/javascript">
								<li className="py-4 text-2xl hover:text-3xl">
									JavaScript addEventListener()
								</li>
							</Link>
							<Link href="/machinelearning">
								<li className="py-4 text-2xl hover:text-3xl">
									What is Machine Learning?
								</li>
							</Link>
							<Link href="/next13overview">
								<li className="py-4 text-2xl hover:text-3xl">
									NextJS 13 Release Updates
								</li>
							</Link>
							<Link href="/webcomponents">
								<li className="py-4 text-2xl hover:text-3xl">
									How to implement and use WebComponents
								</li>
							</Link>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div> */}
				</div>
			</section>
		</>
	);
}
