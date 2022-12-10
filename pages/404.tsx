import React from "react";
import styles from "../styles/Home.module.css";

type Props = {};

export default function index({}: Props) {
	return (
		<div
			className={`h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500 grid pt-72 sm:pt-0 sm:place-items-center text-5xl sm:text-6xl text-center pb-6 ${styles.title}`}>
			404 Page Not Found
		</div>
	);
}
