import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";

export interface LayoutChildren {
	children: React.ReactNode;
}

function Layout({ children }: LayoutChildren) {
	const router = useRouter();
	const path = router.pathname === "/";

	return (
		<>
			{path ? (
				<>
					<Header headerHome />
					<main>{children}</main>
				</>
			) : (
				<>
					<Header />
					<main className="px-6 sm:px-24 py-10">{children}</main>
				</>
			)}
		</>
	);
}

export default Layout;
