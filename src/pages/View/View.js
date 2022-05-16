import { useContext, useState, useEffect } from "react";
import { getPokemon } from "../../services/Pokemon";
import { ListContext } from "../../contexts/ListContext";
import { useNavigate } from "react-router-dom";
import { PokemonProvider } from "../../contexts/PokemonContext";
import { PokemonCard } from "./PokemonCard";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import "./View.css";

export default function View() {
	const [pokemon, setPokemon] = useState();
	const { isLogged } = useContext(ListContext);
  const navigate = useNavigate();
  const { id } = useParams();


	async function chargeObject() {
		try {
			const results = await getPokemon(String(Number(id) + 1));
			setPokemon(results);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {chargeObject();}, [id]);

  useEffect(() => {if (!isLogged) {navigate("/login")}});

  if (pokemon === undefined) {
    return (
      <div>Loading</div>
    );
  }

	return (
		<main className="View">
			<section className="ViewContainer">
				<section className="ViewHeader">
				<Typography variant="overline" display="block" gutterBottom align="center" component="h1" fontSize="20px">
					Pokemon selected as {pokemon.name}
				</Typography>
				</section>
				<PokemonProvider value={{ pokemon, id }}>
				<section className="ViewBody">
					<PokemonCard />
				</section>
				</PokemonProvider>
			</section>
		</main>
	);
}