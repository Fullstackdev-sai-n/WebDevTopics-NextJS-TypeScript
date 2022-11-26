import Link from "next/link";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./header.module.css";
import { useRouter } from "next/router";

function Header() {
	const [clickEvent, setClickEvent] = React.useState(false);

	const navItems = [
		["CSS", "/css"],
		["JavaScript", "/javascript"],
		["MachineLearning", "/machinelearning"],
		["NextJS", "/next13overview"],
		["WebComponents", "/webcomponents"],
	];

	function menuClickHandler() {
		setClickEvent(!clickEvent);
	}
	return (
		<header className="bg-slate-900 w-full h-16 flex align-middle px-6 z-10">
			<div
				onClick={menuClickHandler}
				id="header-menu-icon"
				className="sm:hidden text-3xl mt-2">
				{!clickEvent ? <MenuBookIcon className="text-3xl" /> : <CloseIcon />}
			</div>
			<nav
				className={
					clickEvent
						? `${styles.animDown} absolute grid left-0 px-4 pb-4 bg-inherit grid-flow-row w-full top-16 z-10`
						: "absolute hidden left-0 px-4 pb-4 sm:pb-0 sm:px-0 bg-inherit grid-flow-row w-full top-16 sm:grid sm:top-0 sm:relative sm:place-items-center sm:grid-cols-6"
				}>
				<Link href="/">
					<MenuBookIcon className="hidden sm:block m-4 text-3xl" />{" "}
				</Link>
				{navItems.map(([title, url]) => (
					<Link
						key={url}
						href={url}
						className="rounded-sm sm:rounded-lg  px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900">
						{title}
					</Link>
				))}
			</nav>
		</header>
	);
}

export default Header;
