import Dashboard from './Dashboard'
import EjAR from './ar/EjAR'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas} from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";

function Scene() {
    const gltf = useLoader(GLTFLoader, 'Fish.glb')
    return <primitive object={gltf.scene} position={[0, 0, -9]} rotation={[0, 5, 0]} />
}

function ARSaul() {
    return (
        <>
            <Dashboard />
            <Canvas style={{marginTop: 100}}>
                <Scene />
                <directionalLight position={[5, 5, 5]} intensity={1} />
            </Canvas>
        </>
    )
}

  
  export default ARSaul;