const generateRoadAltitude = (length, difficulty) => {
	// Every value represents ROAD_SIZE meters, so for every km, generate 100 values
	const valuesToGenerate = length * 100;
	const road = [];
	let altitude = 0;
	for (let i = 0; i < valuesToGenerate; i++) {
		// Generate random change in altitude
		const altitudeChange = (Math.random() * difficulty - difficulty / 2);
		altitude += altitudeChange;
		road.push(altitude);
	}
	return road;
}

export default generateRoadAltitude;
