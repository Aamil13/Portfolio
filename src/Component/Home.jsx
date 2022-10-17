import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


import DText from './3DText';

const Home = () => {

  
  return (
    
    <>
    <div className="w-100 mobilewidth"
     style={{ height: "87vh", backgroundColor: "black"}} >
          
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
    
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
      <DText  />
      </Suspense>
      {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
      <OrbitControls  enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      
    </Canvas>
    
    </div>
     
    </>
  );
}

export default Home