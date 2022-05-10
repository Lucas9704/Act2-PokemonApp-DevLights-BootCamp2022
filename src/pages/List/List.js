import { useState } from "react";
import { getPokemons } from "../../services/Pokemons";
import { PokemonsProvider } from "../../contexts/PokemonsContext";
import { PokemonsTable } from "../PokemonsTable/PokemonsTable";
import { ListHeader } from "../ListHeader/ListHeader";

import "./List.css";

function List() {
	const [pokemons, setPokemons] = useState([]);

  async function onClick() {
		try {
			const { results } = await getPokemons();
			setPokemons(results);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main className="List">
      <PokemonsProvider value={{ pokemons}}>
        <section className="ListContainer">
          <section className="ListHeader">
            <ListHeader />
            <button onClick={onClick}>Get Pokemons</button>
          </section>
          <section className="ListBody">
            <PokemonsTable />
          </section>
        </section>
      </PokemonsProvider>
		</main>
	);
}

export default List;
