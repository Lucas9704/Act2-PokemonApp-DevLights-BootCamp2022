import { useContext, useState, useEffect } from "react";
import { getPokemon } from "../../services/Pokemon";
import { ListContext } from "../../contexts/ListContext";
import { ListHeader } from "../ListHeader/ListHeader";
import { useNavigate } from "react-router-dom";
import { PokemonProvider } from "../../contexts/PokemonContext";
import { PokemonCard } from "./PokemonCard";
import "./View.css";

export default function View() {
	const [pokemon, setPokemon] = useState();
	const { idPokemon, isLogged } = useContext(ListContext);
  const navigate = useNavigate();

	async function chargeObject() {
		try {
			const results = await getPokemon(String(Number(idPokemon) + 1));
			setPokemon(results);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {chargeObject();}, []);

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
					<ListHeader />
				</section>
        <PokemonProvider value={{ pokemon, idPokemon }}>
          <section className="ViewBody">
            <PokemonCard />
          </section>
        </PokemonProvider>
			</section>
		</main>
	);
}