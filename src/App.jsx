import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import Robotics2 from "./Robotics_2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-gray-500">
        <Canvas className="h-full ">
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Robotics2 position={[0, -3, -10]} />
            <group position={[-0.7, 3.5, -9]}>
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[3.5, 0.8]} />
                <meshStandardMaterial color="green" side={THREE.DoubleSide} />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                color="white"
              >
                UBLOX GPS + COMPASS
              </Text>
            </group>
            <group position={[-0.5, 2.5, -7.5]} rotation={[5, 0, 0]}>
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[3.5, 0.8]} />
                <meshStandardMaterial color="green" side={THREE.DoubleSide} />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                color="white"
              >
                PIXHAWK AUTOPILOT
              </Text>
            </group>
            <group position={[1.0, 1.7, -10]} rotation={[0, 1.6, 0]}>
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[3.5, 0.8]} />
                <meshStandardMaterial color="green" side={THREE.DoubleSide} />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                color="white"
              >
                ALUMINUM CHASIS
              </Text>
            </group>
            <group position={[-0.3, 3.5, -12.5]} rotation={[0, 0, 0]}>
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[4.2, 0.8]} />
                <meshStandardMaterial color="green" side={THREE.DoubleSide} />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                color="white"
              >
                UNIHENDRON DATALOGGER
              </Text>
            </group>
            <group position={[3, 1.3, -3.6]} rotation={[0, 0, 0]}>
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[4.6, 0.8]} />
                <meshStandardMaterial color="green" side={THREE.DoubleSide} />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                color="white"
              >
                4-WHEEL DRIVE AND STEERING
              </Text>
            </group>
            <group position={[-0.3, 2.2, -6]} rotation={[0, 0, 0]}>
              <mesh position={[0, 0, 0]}>
                <planeGeometry args={[3.5, 0.8]} />
                <meshStandardMaterial color="green" side={THREE.DoubleSide} />
              </mesh>
              <Text
                position={[0, 0, 0.01]}
                fontSize={0.3}
                anchorX="center"
                anchorY="middle"
                color="white"
              >
                UHF DATA LINK
              </Text>
            </group>
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </>
  );
}

export default App;
