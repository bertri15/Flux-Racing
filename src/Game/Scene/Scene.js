import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import generateRoadAltitude from './helpers/generateRoadAltitude';
import getElevationAtDistance from './helpers/getElevationAtDistance';
import getInclination from './helpers/getInclination';
import renderRoad from './helpers/renderRoad';

const Scene = () => {
	const sceneRef = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		sceneRef.current.appendChild(renderer.domElement);

		const profile = generateRoadAltitude(100, 3);
		renderRoad(profile, scene)

		const cyclistGeometry = new THREE.BoxGeometry(0.5, 1, 2);
		const cyclistMaterial = new THREE.MeshBasicMaterial({ color: 0xff99ff });
		const cyclist = new THREE.Mesh(cyclistGeometry, cyclistMaterial);
		cyclist.position.set(0, 0, 0);

		scene.add(cyclist);

		let moving = false;
		document.addEventListener('keydown', onKeyDown);
		document.addEventListener('keyup', onKeyUp);

		function onKeyDown(event) {
			if (event.code === 'KeyW') {
				moving = true;
			}
		}

		function onKeyUp(event) {
			if (event.code === 'KeyW') {
				moving = false;
			}
		}

		camera.position.set(10, 3, 15);
		camera.lookAt(new THREE.Vector3(0, 0, 0));

		function animate() {
			requestAnimationFrame(animate);

			if (moving) {
				cyclist.position.z -= 0.1;
				cyclist.position.y = getElevationAtDistance(profile, cyclist.position.z) + 0.5;
				cyclist.rotation.x = getInclination(profile, cyclist.position.z);
			}

			camera.position.z = cyclist.position.z + 5;
			camera.position.y = cyclist.position.y + 5;
			camera.lookAt(new THREE.Vector3(0, cyclist.position.y, cyclist.position.z));

			renderer.render(scene, camera);
		}
		animate();
	}, []);

	return <div ref={sceneRef} />;
};

export default Scene;