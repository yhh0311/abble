/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TreeCarrotNo2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tree-Carrot-no2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['Tree-Carrot-no2'].geometry} material={materials['color-palette.001']} />
    </group>
  )
}

useGLTF.preload('/Tree-Carrot-no2.gltf')
