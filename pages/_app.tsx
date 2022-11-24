import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import Loading from "../components/Loading";

export default function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleStart = (url: string) => {
			NProgress.start();
			NProgress.configure({
				showSpinner: false,
				minimum: 0.1,
			});
			setIsLoading(true);
		};

		const handleStop = () => {
			NProgress.done();
			setIsLoading(false);
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</>
	);
}
