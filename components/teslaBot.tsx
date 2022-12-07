import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function ModelTesla(props: any) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/tesla_bot/scene.gltf");
	const { actions } = useAnimations(animations, group);
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model">
					<group
						name="7632b4704f9b4287af904a9b9eee8ffbfbx"
						rotation={[Math.PI / 5, 2, 2]}
						scale={0.03}>
						<group name="Object_2">
							<group name="RootNode">
								<group name="Object_4">
									<primitive object={nodes._rootJoint} />
									<group name="Object_6" />
									<group name="head_low_1" />
									<skinnedMesh
										name="Object_7"
										geometry={nodes.Object_7.geometry}
										material={materials.Textures}
										skeleton={nodes.Object_7.skeleton}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/tesla_bot/scene.gltf");
