const getInclination = (altitudes, distance) => {
	const absoulteDistance = Math.abs(distance);
	const index = Math.floor(absoulteDistance / 10);
	if (index < 0 || index >= altitudes.length - 1) {
		return 0;
	}

	const deltaY = altitudes[index + 1] - altitudes[index];
	const deltaX = 10;
	const angle = Math.atan2(deltaY, deltaX);

	return angle;
}

export default getInclination;
