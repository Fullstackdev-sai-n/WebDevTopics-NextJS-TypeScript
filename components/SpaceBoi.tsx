import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
	const { nodes, materials }: any = useGLTF("space_boi/scene.gltf");
	const pi = 3.141592653589793238;
	return (
		<group position={[1, -4, 1]} {...props} dispose={null}>
			<group rotation={[-pi / 2, 0, 0]}>
				<group rotation={[pi / 2, 0, 0]} scale={0.01}>
					<group rotation={[-pi / 2, 0, 0]} scale={100}>
						<mesh
							geometry={nodes.body_Material001_0.geometry}
							material={materials["Material.001"]}
						/>
						<mesh
							geometry={nodes.body_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group rotation={[-pi / 2, 0, 0]} scale={[100, 100, 1.89]}>
						<mesh
							geometry={nodes.waves_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group rotation={[-pi / 2, 0, 0]} scale={[100, 100, 1.89]}>
						<mesh
							geometry={nodes.waves1_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[92.46, 15.53, 2.11]}
						rotation={[-pi / 2, 0, 0]}
						scale={[100, 100, 1.89]}>
						<mesh
							geometry={nodes.waves2_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[489.69, 793.81, 355.29]}
						rotation={[-pi / 2, 0, -pi / 2]}
						scale={20.41}>
						<mesh
							geometry={nodes.particles_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[375.47, 427.95, 0]}
						rotation={[-pi / 2, 0, 0]}
						scale={62.4}>
						<mesh
							geometry={nodes.Sphere_Material001_0.geometry}
							material={materials["Material.001"]}
						/>
					</group>
					<group
						position={[375.47, 427.95, 0]}
						rotation={[-pi / 2, 0, 0]}
						scale={60.32}>
						<mesh
							geometry={nodes.Sphere001_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[375.47, 427.95, 0]}
						rotation={[-0.69, 0, 0]}
						scale={[104.13, 81.61, 0]}>
						<mesh
							geometry={nodes.Sphere004_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[-341.99, 460.2, -117.03]}
						rotation={[-pi / 2, 0, 0]}
						scale={62.4}>
						<mesh
							geometry={nodes.Sphere005_Material001_0.geometry}
							material={materials["Material.001"]}
						/>
					</group>
					<group
						position={[-341.99, 460.2, -117.03]}
						rotation={[-pi / 2, 0, 0]}
						scale={60.32}>
						<mesh
							geometry={nodes.Sphere006_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[507.52, 667.59, -214.48]}
						rotation={[-pi / 2, 0, 0]}
						scale={16.88}>
						<mesh
							geometry={nodes.Sphere009_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[-287.44, 585.79, -311.86]}
						rotation={[-pi / 2, 0, 0]}
						scale={16.88}>
						<mesh
							geometry={nodes.Sphere010_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[-553.46, 331.07, -379.07]}
						rotation={[-pi / 2, 0, 0]}
						scale={11.44}>
						<mesh
							geometry={nodes.Sphere011_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[0, -101.67, 0]}
						rotation={[-pi / 2, 0, 0]}
						scale={[1120.01, 1120.01, 100]}>
						<mesh
							geometry={nodes.Cube_Material001_0.geometry}
							material={materials["Material.001"]}
						/>
					</group>
					<group
						position={[-357.4, 392.65, 0]}
						rotation={[-pi / 2, 0, 0]}
						scale={39.71}>
						<mesh
							geometry={nodes.Sphere002_Material001_0.geometry}
							material={materials["Material.001"]}
						/>
						<mesh
							geometry={nodes.Sphere002_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[-357.4, 392.65, 0]}
						rotation={[-pi / 2, 0, 0]}
						scale={41.07}>
						<mesh
							geometry={nodes.Sphere003_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[199.63, 566.88, -221]}
						rotation={[-pi / 2, 0, 0]}
						scale={39.71}>
						<mesh
							geometry={nodes.Sphere007_Material001_0.geometry}
							material={materials["Material.001"]}
						/>
						<mesh
							geometry={nodes.Sphere007_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[199.63, 566.88, -221]}
						rotation={[-pi / 2, 0, 0]}
						scale={41.07}>
						<mesh
							geometry={nodes.Sphere008_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("space_boi/scene.gltf");
