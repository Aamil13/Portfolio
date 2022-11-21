import React, { useEffect, useRef , useState } from 'react'
import * as THREE from 'three'
import {  useThree,useFrame } from '@react-three/fiber'
import { Center,  Text3D } from '@react-three/drei'

const DText = ({ margin = 0.5 }) => {

 const[size , setSize] = useState(0.5)
 const[lsize , setLSize] = useState(0.3)

 const aa = window.innerWidth;

  const windowsize = () =>{
    window.innerWidth <= 700 ? setSize(0.3) : setSize(0.5);
    window.innerWidth <= 700 ? setLSize(0.15) : setLSize(0.3);
  }

  useEffect(() => {
      windowsize();
  }, [aa])
  

    const group = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 2) / 10, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 6, 0.1)
  })
    const { width, height } = useThree((state) => state.viewport)
  return (
    <>
    <group ref={group}  dispose={null}>
    <Center bottom right position={[-width / 2 + margin, height / 2 - margin, 0]}>
        <Text3D letterSpacing={-0.06} lineHeight={0.6} size={size} font="/Inter_Bold.json">
          {`Hi, \n My Name is`}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={-0.01} size={lsize} font="/Inter_Bold.json">
          {` Currentlly focused \n on gaining industry experience.`}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
      <Center rotation={[-0.4, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={-0.06}
          size={size}
          font="/Inter_Bold.json">
          {`Mohd Aamil Shafi\n I'm a Full Stack Developer`}
          <meshNormalMaterial />
        </Text3D>
        </Center>
        </group>
        </>
  )
}

export default DText