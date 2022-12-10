import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import Loading from "../components/loader/Loading";
import "../node_modules/nprogress/nprogress.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if ("serviceWorker" in navigator) {
			const navigatorService: any =
				navigator.serviceWorker.register("/ServiceWorker.js");

			navigatorService.then(
				function (registration: any) {
					console.log(
						"Service Worker Registered Successfully",
						registration.scope
					);
				},
				function (err: any) {
					console.log("Error while registering service worker:", err);
				}
			);
		}
	}, []);

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
			{/* <Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				strategy="lazyOnload"
			/>
			<Script strategy="lazyOnload" id="google-analytics">
				{`  window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			  
				gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS})
				`}
			</Script> */}

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
