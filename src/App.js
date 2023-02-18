import React from 'react';
import ReactDOM from "react-dom/client";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Scene from './Game/Scene/Scene';

// Components for different routes

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Scene />} />
			</Routes>
		</Router>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
