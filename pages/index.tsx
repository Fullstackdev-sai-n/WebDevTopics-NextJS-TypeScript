import KeyBoard from "../components/keyboard";

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
