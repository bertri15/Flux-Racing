import * as THREE from 'three';

import gameConfig from '../../gameConfig';

function renderRoad(altitudes, scene) {
	const { ROAD_SIZE } = gameConfig;

	// Loop through each altitude
	for (let i = 0; i < altitudes.length - 1; i++) {
		// Get the current altitude and the next one
		const currentAltitude = altitudes[i];
		const nextAltitude = altitudes[i + 1];

		// Calculate the height difference
		const heightDifference = nextAltitude - currentAltitude;

		// Create the road plane
		const roadLength = Math.sqrt((ROAD_SIZE * ROAD_SIZE) + (heightDifference * heightDifference));
		const roadPlaneGeometry = new THREE.PlaneGeometry(ROAD_SIZE, roadLength, 1, 1);
		const roadPlaneMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 });
		const roadPlane = new THREE.Mesh(roadPlaneGeometry, roadPlaneMaterial);

		// Set the position and rotation of the plane to connect the current and next altitudes
		roadPlane.position.set(0, currentAltitude + heightDifference / 2, (-i * ROAD_SIZE) - (ROAD_SIZE / 2));
		roadPlane.rotation.x = +Math.atan2(heightDifference, ROAD_SIZE) - THREE.MathUtils.degToRad(90);

		// Add the road plane to the scene
		scene.add(roadPlane);
	}
}

export default renderRoad;
