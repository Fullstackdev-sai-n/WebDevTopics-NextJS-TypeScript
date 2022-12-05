import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {
	const model = useGLTF("http://localhost:3000/stackTitle.glb");

	console.log(model.animations);

	return <primitive object={model.scene} />;
}
