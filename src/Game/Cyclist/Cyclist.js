import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cyclist = () => {
	const cyclistRef = useRef();
	useEffect(() => {
		const cyclistGeometry = new THREE.BoxGeometry(2, 2, 2);
		const cyclistMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		const cyclist = new THREE.Mesh(cyclistGeometry, cyclistMaterial);
		cyclist.position.set(0, 0, 0);
		cyclistRef.current.add(cyclist);
	}, []);
	return <primitive object={cyclistRef} />;
};

export default Cyclist;