import { useRouter } from "next/router";
import React from "react";

function PositionElements() {
	const router = useRouter();
	const id = router.query.id as String;

	return <div>positionElement {id}</div>;
}

export default PositionElements;
