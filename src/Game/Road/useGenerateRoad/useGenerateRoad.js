import { useState, useEffect } from 'react';

function useGenerateRoad(length, difficulty) {
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		let currentAltitude = 0;
		const newProfile = [];

		for (let i = 0; i < length * 1000; i += 10) {
			const altitudeChange = (Math.random() - 0.5) * difficulty;
			currentAltitude += altitudeChange;
			newProfile.push(currentAltitude);
		}

		setProfile(newProfile);
	}, [length, difficulty]);

	return profile;
}

export default useGenerateRoad;
