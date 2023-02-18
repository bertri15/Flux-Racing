import gameConfig from '../../gameConfig';

const getElevationAtDistance = (altitudes, distance) => {
	const { ROAD_SIZE } = gameConfig;
	const absoulteDistance = Math.abs(distance);

	// Calculate the index in the array for the given distance
	const index = Math.floor(absoulteDistance / ROAD_SIZE);

	// If the distance is beyond the end of the array, return the last altitude
	if (index >= altitudes.length - 1) {
		return altitudes[altitudes.length - 1];
	}

	// Calculate the fraction of the way between the two altitudes
	const fraction = (absoulteDistance % ROAD_SIZE) / ROAD_SIZE;

	// Interpolate between the two altitudes using the fraction
	const elevation = (1 - fraction) * altitudes[index] + fraction * altitudes[index + 1];

	return elevation;
}

export default getElevationAtDistance;