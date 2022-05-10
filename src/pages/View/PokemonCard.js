import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";

export function PokemonCard() {
  const { pokemon, idPokemon } = useContext(PokemonContext);

  return (
    <>
      <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (Number(idPokemon) + 1) + ".svg"} alt="poke"/>
    <ul>
      <h3>{pokemon.name}</h3>
      <li> Order: {pokemon.order}</li>
      <li>Types:
        <ul>
          <li>Primary: {pokemon.types[0].type.name}</li>
          <li>Secondary: {pokemon.types[1].type.name}</li>
        </ul>
      </li>
      <li>Height: {pokemon.height}</li>
      <li>Weight: {pokemon.weight}</li>
      <li>Abilities: 
        <ul>
          <li>{pokemon.abilities[0].ability.name}</li>
          <li>{pokemon.abilities[1].ability.name}</li>
        </ul>
      </li>
      <li>Stats: 
        <ul>
          <li>HP: {pokemon.stats[0].base_stat}</li>
          <li>Attack: {pokemon.stats[1].base_stat}</li>
          <li>Defense: {pokemon.stats[2].base_stat}</li>
          <li>Special Attack: {pokemon.stats[3].base_stat}</li>
          <li>Special Defense: {pokemon.stats[4].base_stat}</li>
          <li>Speed: {pokemon.stats[5].base_stat}</li>
        </ul>
      </li>
    </ul>
    </>
  );
}