/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TreeEggplantNo2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tree-Eggplant-no2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['Tree-Eggplant-No1'].geometry} material={materials['color-palette']} />
    </group>
  )
}

useGLTF.preload('/Tree-Eggplant-no2.gltf')
