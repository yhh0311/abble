/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TreeDolphinNo2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tree-Dolphin-no2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['Tree-Dolphin-no2'].geometry} material={materials['color-palette']} />
    </group>
  )
}

useGLTF.preload('/Tree-Dolphin-no2.gltf')
