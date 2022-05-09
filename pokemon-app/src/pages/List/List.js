import { useState } from "react";
import { getPokemons } from "../../services/Pokemons";
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
			<section className="ListContainer">
				<h1>Pokemon List</h1>
				<button onClick={onClick}>Get Pokemons</button>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Fotito cheta</th>
						</tr>
					</thead>
					<tbody>
						{pokemons.map(({ name }, i) => (
							<tr key={i}>
								<th>{`${name}`}</th>
								<th>
										<img
										src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (Number(i) +1) +".png"}
										alt="pokemons"
									/>
								</th>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</main>
	);
}

export default List;
