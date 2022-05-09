import { useNavigate } from "react-router-dom";

import "./Landing.css";

export default function Landing() {
	const navigate = useNavigate();

	function onClick() {
		navigate("login");
	}

	return (
		<main className="Landing">
			<section className="LandingContainer">
				<h1>Pokemon App</h1>
				<h3>ReactJS</h3>
				<button onClick={onClick}>Lest Go💪!!</button>
			</section>
		</main>
	);
}