
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Define intrinsic elements to satisfy TS and avoid issues with implicit types
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const Fog = 'fog' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const LineSegments = 'lineSegments' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const LineBasicMaterial = 'lineBasicMaterial' as any;

const NetworkNode: React.FC<{ position: [number, number, number], color: string }> = ({ position, color }) => {
  return (
    <Group position={position}>
      <Mesh>
        <IcosahedronGeometry args={[0.2, 0]} />
        <MeshBasicMaterial color={color} wireframe transparent opacity={0.3} />
      </Mesh>
      <Mesh>
        <IcosahedronGeometry args={[0.05, 0]} />
        <MeshBasicMaterial color="white" />
      </Mesh>
    </Group>
  );
};

const AnimationScene = () => {
    const count = 40;
    const radius = 4;
    
    // Generate points
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360); 
            const phi = THREE.MathUtils.randFloatSpread(360); 
            const x = radius * Math.sin(theta) * Math.cos(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(theta);
            p.push(new THREE.Vector3(x, y, z));
        }
        return p;
    }, []);

    // Generate connections (Native line segments for performance and stability)
    const linePositions = useMemo(() => {
        const positions: number[] = [];
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                if (points[i].distanceTo(points[j]) < 2.5) {
                    positions.push(points[i].x, points[i].y, points[i].z);
                    positions.push(points[j].x, points[j].y, points[j].z);
                }
            }
        }
        return new Float32Array(positions);
    }, [points]);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <>
            <Fog attach="fog" args={['#0B1120', 5, 20]} />
            <AmbientLight intensity={0.5} />
            
            <Group ref={groupRef}>
                {/* Core System */}
                <Mesh>
                    <IcosahedronGeometry args={[2, 1]} />
                    <MeshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.05} />
                </Mesh>
                
                {/* Distributed Nodes */}
                {points.map((pos, i) => (
                    <NetworkNode key={i} position={[pos.x, pos.y, pos.z]} color={i % 2 === 0 ? "#38bdf8" : "#818cf8"} />
                ))}

                {/* Connections */}
                <LineSegments>
                    <BufferGeometry>
                        <BufferAttribute
                            attach="attributes-position"
                            count={linePositions.length / 3}
                            array={linePositions}
                            itemSize={3}
                        />
                    </BufferGeometry>
                    <LineBasicMaterial color="#2dd4bf" transparent opacity={0.15} />
                </LineSegments>
            </Group>
            
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            
            <PointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" distance={30} />
            <PointLight position={[-10, -5, -10]} intensity={1} color="#818cf8" distance={30} />
        </>
    );
};

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-[#0B1120]">
      {/* Increased Z position for camera on mobile screens could be handled here via resizing logic, 
          but generally R3F handles responsive canvas reasonably well. 
          We increase default distance slightly to ensure the network shape fits in portrait mode. */}
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
        <Suspense fallback={null}>
            <AnimationScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
