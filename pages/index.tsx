import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import KeyBoard from "../components/keyboard";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<section className="pb-10">
				<h1 className="text-6xl font-thin text-center">STACK WEB DEV</h1>
			</section>
			<section className="grid place-items-center relative">
				<KeyBoard />
			</section>
		</>
	);
}
