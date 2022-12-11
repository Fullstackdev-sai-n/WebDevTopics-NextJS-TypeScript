import { useRouter } from "next/router";
import React from "react";
import Header from "./header/Header";
import { Inter } from "@next/font/google";

export interface LayoutChildren {
	children: React.ReactNode;
}

const inter = Inter({
	subsets: ["latin"],
});
function Layout({ children }: LayoutChildren) {
	const router = useRouter();
	const path = router.pathname === "/";
	const errorPath = router.pathname === "/404";

	return (
		<div className={inter.className}>
			{path || errorPath ? (
				<>
					<Header headerHome />
					<main>{children}</main>
				</>
			) : (
				<>
					<Header />
					<main className="px-6 sm:px-24 py-10 bg-black">{children}</main>
				</>
			)}
		</div>
	);
}

export default Layout;
