import { useGLTF, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { Suspense } from 'react';
// import { useStore } from '../../hooks/useStore';
import { TextureLoader, RepeatWrapping, NearestFilter, LinearMipMapLinearFilter } from 'three';
import Ground from '../../public/Ground';
import TreeCenter from '../../public/Tree-Center';

export const Terrain = (props) => {
  
  useThree(({camera}) => {
    camera.position.set(10, 25, 25);
    camera.lookAt([0,0,0]);
  });
    
  return (
    <group>
        
      <Ground
        receiveShadow
      />
        
      <TreeCenter/>

    </group>
    
  );
};
