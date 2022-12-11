// import React from "react";
// import { GetServerSideProps } from "next";
// import CodeBlock from "../../components/codeblock";
// import DangerousIcon from "@mui/icons-material/Dangerous";
// import CheckIcon from "@mui/icons-material/Check";

// type Props = {};

// // export const getServerSideProps: GetServerSideProps = async (context) => {
// // 	const paramsId = context?.params?.id;
// // 	const res: any = await fetch(`${process.env.HOST}/typescript/` + paramsId);
// // 	const data: any = await res.json();
// // 	const response = data.data;
// // 	return {
// // 		props: {
// // 			data: response,
// // 		},
// // 	};
// // };

// function TypeErrorSolutionPage({ data }: any) {
// 	return (
// 		<section>
// 			<h1 className="text-3xl py-4 text-green-400 sm:text-5xl sm:py-6 text-center">
// 				<span>error{data.ErrorNo}: </span>
// 				<span>{data.title}</span>
// 			</h1>
// 			<div>
// 				<h2 className="text-2xl py-4 text-red sm:text-4xl sm:py-6">
// 					<span className="text-red-600 pr-2">
// 						<DangerousIcon />
// 					</span>
// 					Broken Code
// 				</h2>
// 				<CodeBlock codeId="broken" code={data.solution.brokenCode} textBroken />
// 			</div>
// 			<div className="py-10">
// 				<h2 className="text-2xl py-4 text-red sm:text-4xl sm:py-6">
// 					<span className="text-green-600 pr-2">
// 						<CheckIcon className="text-4xl" />
// 					</span>
// 					Fixed Code
// 				</h2>
// 				<p className="pb-6"></p>
// 				<CodeBlock
// 					codeId="fixed"
// 					code={data.solution.fixedCode}
// 					fixedText="You have to close the string literal with an ending ':"
// 				/>
// 				<div className="hidden">
// 					<p className="py-6">
// 						You have to close the string literal with an ending <b>&quot;</b> :
// 					</p>
// 					<CodeBlock
// 						codeId="fixed"
// 						code='const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr";'
// 						fixedText="You have to close the string literal with an ending ':"
// 					/>
// 				</div>
// 				<div className="hidden">
// 					<p className="py-6">
// 						You have to close the string literal with an ending <b>&quot;</b> :
// 					</p>
// 					<CodeBlock
// 						codeId="fixed"
// 						code='const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr";'
// 						fixedText="You have to close the string literal with an ending ':"
// 					/>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default TypeErrorSolutionPage;
