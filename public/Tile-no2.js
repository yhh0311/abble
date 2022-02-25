/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TileNo2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Tile-no2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube_Crate.geometry} material={materials['color-palette']} scale={0.49} />
    </group>
  )
}

useGLTF.preload('/Tile-no2.gltf')