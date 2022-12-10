import Link from "next/link";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../public/logo-black.svg";

function Header({ headerHome }: any) {
	const [clickEvent, setClickEvent] = React.useState(false);

	const navItems: any = [
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
		<header
			className={
				headerHome
					? "bg-transparent absolute w-full h-16 flex align-middle px-6 z-10"
					: "bg-slate-900 w-full h-16 flex align-middle px-6 z-10"
			}>
			<div
				onClick={menuClickHandler}
				id="header-menu-icon"
				className={
					headerHome ? "sm:hidden text-3xl mt-2 " : "sm:hidden text-3xl mt-2"
				}>
				{!clickEvent ? <MenuBookIcon className="text-3xl" /> : <CloseIcon />}
			</div>
			<nav
				className={
					clickEvent
						? `${styles.animDown} absolute grid left-0 px-4 pb-4 bg-inherit grid-flow-row w-full top-16 z-10`
						: "absolute hidden left-0 px-4 pb-4 sm:pb-0 sm:px-0 bg-inherit grid-flow-row w-full top-16 sm:grid sm:top-0 sm:relative sm:place-items-center sm:grid-cols-6"
				}>
				<Link href="/">
					{headerHome ? (
						<Image
							className="hidden sm:block"
							width={100}
							height={100}
							src={logo}
							alt="Logo-Image"
						/>
					) : (
						<MenuBookIcon className="hidden sm:block m-4 text-3xl" />
					)}
				</Link>
				{navItems.map(([title, url]: any) => (
					<Link
						key={url}
						href={url}
						className={
							headerHome
								? "rounded-sm sm:rounded-none px-3 py-2 text-black font-medium hover:bg-slate-100/60 hover:text-slate-900"
								: "rounded-sm sm:rounded-sm  px-3 py-2 text-slate-100 font-medium hover:bg-slate-100/60 hover:text-slate-900"
						}>
						{title}
					</Link>
				))}
			</nav>
		</header>
	);
}

export default Header;
