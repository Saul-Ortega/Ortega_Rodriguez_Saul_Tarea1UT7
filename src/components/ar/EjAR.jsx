//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrCube from './XrCube';
import { ARButton, XR } from "@react-three/xr";
import XrIcosahedron from "./XrIcosahedron";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    {/* <XrCube /> */}
                   <XrIcosahedron />
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;