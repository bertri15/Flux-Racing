import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Road = () => {
	const roadRef = useRef();
	useEffect(() => {
		const roadGeometry = new THREE.PlaneGeometry(100, 20);
		const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });
		const road = new THREE.Mesh(roadGeometry, roadMaterial);
		road.position.set(0, -10, 0);
		road.rotation.x = -Math.PI / 2;
		roadRef.current.add(road);
	}, []);
	return <primitive object={roadRef} />;
};

export default Road;