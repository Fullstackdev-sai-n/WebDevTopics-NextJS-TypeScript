import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type Props = {};

function CodeBlock({ code, codeId, textBroken }: any) {
	const [showCopiedText, setShowCopiedText] = React.useState(false);
	function copyCode(): any {
		var range: any = document.createRange();
		const el = range.selectNode(document.getElementById(codeId));
		window.getSelection()?.removeAllRanges();
		window.getSelection()?.addRange(range);
		document.execCommand("copy");
		window.getSelection()?.removeAllRanges();
		console.log("copied");
		setShowCopiedText(true);
		setTimeout(() => {
			console.log("timeout");
			setShowCopiedText(false);
		}, 1000);
	}

	return (
		<div
			id={codeId}
			onClick={copyCode}
			className="bg-black/[0.2] p-10 rounded-lg relative">
			<pre
				className={
					textBroken
						? `whitespace-pre-wrap text-lg text-red-500 font-semibold`
						: `whitespace-pre-wrap text-lg text-green-400 font-semibold`
				}>
				{code}
			</pre>
			<div className="absolute right-10 top-10 cursor-pointer">
				<ContentCopyIcon />
				{showCopiedText && (
					<span className="text-slate-100 text-sm -top-5 right-0 absolute">
						Copied
					</span>
				)}
			</div>
		</div>
	);
}

export default CodeBlock;
