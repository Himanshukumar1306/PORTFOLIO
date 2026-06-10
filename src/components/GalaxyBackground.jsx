import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random';

const StarField = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const GalaxyBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarField />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default GalaxyBackground;
