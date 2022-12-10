import Image from "next/image";
import React from "react";
import styles from "./loading.module.css";
import logo from "../../public/logo-black.svg";

function Loading() {
	return (
		<div className={`bg-slate-900 w-full h-screen relative`}>
			<div
				className={`top-1/2 left-1/2 absolute w-64 -translate-x-2/4 -translate-y-1/2`}>
				<div className={`${styles.coffee} bg-green-500`}>
					<div className={styles.vapour}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={`${styles.lid} border-green-500`}></div>
				<div className={styles.cup}>
					<div className={styles.loadingSpinner}>
						<div className={styles.loaderWrapper}>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
					<Image
						width="140"
						height="140"
						className="top-12 right-12 absolute"
						src={logo}
						alt="logo-loading"
					/>
				</div>
				<div className={styles.bottom}></div>
				<div className={styles.cupShadow}></div>
			</div>
		</div>
	);
}

export default Loading;
