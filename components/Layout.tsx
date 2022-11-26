import React from "react";
import Header from "./Header";

export interface LayoutChildren {
	children: React.ReactNode;
}

function Layout({ children }: LayoutChildren) {
	return (
		<>
			<Header />
			<main className="px-6 sm:px-24 py-10">{children}</main>
		</>
	);
}

export default Layout;
