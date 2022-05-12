import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import "./Landing.css";

export default function Landing() {
	const navigate = useNavigate();

	function onClick() {
		navigate("login");
	}

	return (
		<main className="Landing">
			<section className="LandingContainer">
				<div className="LandingHeroContainer">
					<h1>Welcome to PokeDev👲</h1>
					<h3>The Pokemon App for dev's</h3>
					<p>The first Pokemon application created exclusively for programmers, 
					log in and find the most famous pokemons with all their detailed characteristics.</p>
					<Button color="success" variant="contained" onClick={onClick}>Lest Go💪!!</Button>
				</div>
				
			</section>
		</main>
	);
}