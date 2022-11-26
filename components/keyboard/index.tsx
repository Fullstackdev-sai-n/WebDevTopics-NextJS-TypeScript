import React, { useEffect } from "react";
import styles from "./keyboard.module.css";

function KeyBoard() {
	useEffect(() => {
		function getKey(e: any) {
			var location = e.location;
			var selector: any;
			if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
				selector = ['[data-key="' + e.keyCode + '-R"]'];
			} else {
				var code = e.keyCode || e.which;
				console.log(document.querySelector('[data-key="' + code + '"]'));
				selector = [
					'[data-key="' + code + '"]',
					'[data-char*="' +
						encodeURIComponent(String.fromCharCode(code)) +
						'"]',
				].join(",");
			}
			return document.querySelector(selector);
		}

		function pressKey(char: String) {
			var key: any = document.querySelector('[data-char*="]');
			if (!key) {
				return console.warn("No key for", char);
			}
			key.setAttribute("data-pressed", "on");
			setTimeout(function () {
				key.removeAttribute("data-pressed");
			}, 200);
		}

		var h1: any = document.querySelector(".home-display-screen");
		console.log(h1);
		var originalQueue = h1.innerHTML;
		var queue = h1.innerHTML;

		console.log(queue.length);

		function next() {
			var c = queue[0];
			queue = queue.slice(1);
			h1.innerHTML = originalQueue.slice(
				0,
				originalQueue.length - queue.length
			);
			pressKey(c);
			if (queue.length) {
				setTimeout(next, Math.random() * 50 + 50);
			}
		}

		h1.innerHTML = "&nbsp;";
		setTimeout(next, 500);

		document.body.addEventListener("keydown", function (e) {
			e.preventDefault();
			var key = getKey(e);
			if (!key) {
				return console.warn("No key for", e.keyCode);
			}

			key.setAttribute("data-pressed", "on");
		});

		document.body.addEventListener("keyup", function (e) {
			e.preventDefault();
			var key = getKey(e);
			key && key.removeAttribute("data-pressed");
		});

		var keyboard: any = document.getElementById("keyboard");
		window.addEventListener("resize", function (e) {
			e.preventDefault();
			size();
		});
		function size() {
			var size: any = keyboard?.parentNode?.clientWidth / 90;
			keyboard.style.fontSize = size + "px";
		}
		size();
	}, []);

	return (
		<section className="grid place-items-center relative">
			<div className="border-2 h-72 w-4/5 bg-slate-900 p-10 glitchBg">
				<code className="home-display-screen">
					WelCome To Stack Web Dev
					<span className="animate-pulse">|</span>
				</code>
			</div>
			<div className="h-20 w-10 bg-slate-900 border-2 border-t-0 border-b-0"></div>
			<div className="h-10 w-40 rounded-full bg-slate-900 border-2  rounded-b-lg"></div>
			<div
				id="keyboard"
				className={`${styles.keyboard} ${styles.keyboardO} w-full`}>
				<div className={`${styles.keyboardRow} ${styles.keyboardRowh1}`}>
					<div data-key="27" className={styles.keyWord}>
						<span>esc</span>
					</div>
					<div data-key="112" className={styles.keyFn}>
						<span>F1</span>
					</div>
					<div data-key="113" className={styles.keyFn}>
						<span>F2</span>
					</div>
					<div data-key="114" className={styles.keyFn}>
						<span>F3</span>
					</div>
					<div data-key="115" className={styles.keyFn}>
						<span>F4</span>
					</div>
					<div data-key="116" className={styles.keyFn}>
						<span>F5</span>
					</div>
					<div data-key="117" className={styles.keyFn}>
						<span>F6</span>
					</div>
					<div data-key="118" className={styles.keyFn}>
						<span>F7</span>
					</div>
					<div data-key="119" className={styles.keyFn}>
						<span>F8</span>
					</div>
					<div data-key="120" className={styles.keyFn}>
						<span>F9</span>
					</div>
					<div data-key="121" className={styles.keyFn}>
						<span>F10</span>
					</div>
					<div data-key="122" className={styles.keyFn}>
						<span>F11</span>
					</div>
					<div data-key="123" className={styles.keyFn}>
						<span>F12</span>
					</div>
					<div data-key="n/a" className={styles.keyWord}>
						<span>pwr</span>
					</div>
				</div>
				<div className={styles.keyboardRow}>
					<div className={styles.keyDouble} data-key="192">
						<div>~</div>
						<div>`</div>
					</div>
					<div className={styles.keyDouble} data-key="49">
						<div>!</div>
						<div>1</div>
					</div>
					<div className={styles.keyDouble} data-key="50">
						<div>@</div>
						<div>2</div>
					</div>
					<div className={styles.keyDouble} data-key="51">
						<div>#</div>
						<div>3</div>
					</div>
					<div className={styles.keyDouble} data-key="52">
						<div>$</div>
						<div>4</div>
					</div>
					<div className={styles.keyDouble} data-key="53">
						<div>%</div>
						<div>5</div>
					</div>
					<div className={styles.keyDouble} data-key="54">
						<div>^</div>
						<div>6</div>
					</div>
					<div className={styles.keyDouble} data-key="55">
						<div>&</div>
						<div>7</div>
					</div>
					<div className={styles.keyDouble} data-key="56">
						<div>*</div>
						<div>8</div>
					</div>
					<div className={styles.keyDouble} data-key="57">
						<div>(</div>
						<div>9</div>
					</div>
					<div className={styles.keyDouble} data-key="48">
						<div>)</div>
						<div>0</div>
					</div>
					<div className={styles.keyDouble} data-key="189">
						<div>_</div>
						<div>-</div>
					</div>
					<div className={styles.keyDouble} data-key="187">
						<div>+</div>
						<div>=</div>
					</div>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW4}`}
						data-key="8">
						<span>delete</span>
					</div>
				</div>
				<div className={styles.keyboardRow}>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW4}`}
						data-key="9">
						<span>tab</span>
					</div>
					<div className={styles.keyLetter} data-char="Q">
						Q
					</div>
					<div className={styles.keyLetter} data-char="W">
						W
					</div>
					<div className={styles.keyLetter} data-char="E">
						E
					</div>
					<div className={styles.keyLetter} data-char="R">
						R
					</div>
					<div className={styles.keyLetter} data-char="T">
						T
					</div>
					<div className={styles.keyLetter} data-char="Y">
						Y
					</div>
					<div className={styles.keyLetter} data-char="U">
						U
					</div>
					<div className={styles.keyLetter} data-char="I">
						I
					</div>
					<div className={styles.keyLetter} data-char="O">
						O
					</div>
					<div className={styles.keyLetter} data-char="P">
						P
					</div>
					<div className={styles.keyDouble} data-key="219" data-char="{[">
						<div> {"{"}</div>
						<div>{"["}</div>
					</div>
					<div className={styles.keyDouble} data-key="221" data-char="}]">
						<div>{"}"}</div>
						<div>{"]"}</div>
					</div>
					<div className={styles.keyDouble} data-key="220" data-char="|\">
						<div>|</div>
						<div>\</div>
					</div>
				</div>
				<div className={styles.keyboardRow}>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW5}`}
						data-key="20">
						<span>caps lock</span>
					</div>
					<div className={styles.keyLetter} data-char="A">
						A
					</div>
					<div className={styles.keyLetter} data-char="S">
						S
					</div>
					<div className={styles.keyLetter} data-char="D">
						D
					</div>
					<div className={styles.keyLetter} data-char="F">
						F
					</div>
					<div className={styles.keyLetter} data-char="G">
						G
					</div>
					<div className={styles.keyLetter} data-char="H">
						H
					</div>
					<div className={styles.keyLetter} data-char="J">
						J
					</div>
					<div className={styles.keyLetter} data-char="K">
						K
					</div>
					<div className={styles.keyLetter} data-char="L">
						L
					</div>
					<div className={styles.keyDouble} data-key="186">
						<div>:</div>
						<div>;</div>
					</div>
					<div className={styles.keyDouble} data-key="222">
						<div>{'"'}</div>
						<div>{"'"}</div>
					</div>
					<div
						className={`${styles.keyBottomRight} ${styles.keyWord} ${styles.keyW5}`}
						data-key="13">
						<span>return</span>
					</div>
				</div>
				<div className={styles.keyboardRow}>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW6}`}
						data-key="16">
						<span>shift</span>
					</div>
					<div className={styles.keyLetter} data-char="Z">
						Z
					</div>
					<div className={styles.keyLetter} data-char="X">
						X
					</div>
					<div className={styles.keyLetter} data-char="C">
						C
					</div>
					<div className={styles.keyLetter} data-char="V">
						V
					</div>
					<div className={styles.keyLetter} data-char="B">
						B
					</div>
					<div className={styles.keyLetter} data-char="N">
						N
					</div>
					<div className={styles.keyLetter} data-char="M">
						M
					</div>
					<div className={styles.keyDouble} data-key="188">
						<div>&lt;</div>
						<div>,</div>
					</div>
					<div className={styles.keyDouble} data-key="190">
						<div>&gt;</div>
						<div>.</div>
					</div>
					<div className={styles.keyDouble} data-key="191">
						<div>?</div>
						<div>/</div>
					</div>
					<div
						className={`${styles.keyBottomRight} ${styles.keyWord} ${styles.keyW6}`}
						data-key="16-R">
						<span>shift</span>
					</div>
				</div>
				<div className={`${styles.keyboardRow} ${styles.keyboardRowh3}`}>
					<div className={`${styles.keyBottomLeft} ${styles.keyWord}`}>
						<span>fn</span>
					</div>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW1}`}
						data-key="17">
						<span>control</span>
					</div>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW1}`}
						data-key="18">
						<span>option</span>
					</div>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW3}`}
						data-key="91">
						<span>command</span>
					</div>
					<div
						className={`${styles.keyDouble} ${styles.keyRight} ${styles.keySpace}`}
						data-key="32"
						data-char=" ">
						&nbsp;
					</div>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW3}`}
						data-key="93-R">
						<span>command</span>
					</div>
					<div
						className={`${styles.keyBottomLeft} ${styles.keyWord} ${styles.keyW1}`}
						data-key="18-R">
						<span>option</span>
					</div>
					<div data-key="37" className={styles.keyArrow}>
						<span>&#9664;</span>
					</div>
					<div
						className={`${styles.keyDouble} ${styles.keyArrowTall}`}
						data-key="38">
						<div>&#9650;</div>
						<div>&#9660;</div>
					</div>
					<div data-key="39" className={styles.keyArrow}>
						<span>&#9654;</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default KeyBoard;
