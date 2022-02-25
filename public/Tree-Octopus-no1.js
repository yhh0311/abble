/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TreeOctopusNo1({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tree-Octopus-no1.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['Tree-Octopus-no1'].geometry} material={materials['color-palette']} />
    </group>
  )
}

useGLTF.preload('/Tree-Octopus-no1.gltf')