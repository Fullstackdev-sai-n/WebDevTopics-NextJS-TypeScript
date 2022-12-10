import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

type Props = {
	title: String;
	description: String;
	logoText: String;
	endpoint: String;
};

function HeroCard({ title, description, logoText, endpoint }: Props) {
	return (
		<div className="h-96 w-72 bg-white/50 shadow-2xl p-6 text-black cursor-pointer">
			<div
				className={`h-20 w-20 rounded-full bg-white/60 shadow-2xl m-auto grid place-items-center font-semibold text-2xl ${styles.cardTitle}`}>
				{logoText}
			</div>
			<h2
				className={`text-center text-xl py-4 whitespace-nowrap truncate ${styles.cardTitle}`}>
				{title}
			</h2>
			<p className="leading-normal text-lg line-clamp-5 h-32">{description}</p>
			<Link href={`/${endpoint}`}>
				<div
					className={`float-right h-10 w-10 rounded-full bg-white/60 m-4 relative grid place-items-center ${styles.cardArrow}`}></div>
			</Link>
		</div>
	);
}

export default HeroCard;
