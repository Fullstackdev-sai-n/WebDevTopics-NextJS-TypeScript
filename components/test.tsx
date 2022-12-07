import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {
	const model = useGLTF("http://localhost:3000/title.glb");

	return <primitive object={model.scene} />;
}
