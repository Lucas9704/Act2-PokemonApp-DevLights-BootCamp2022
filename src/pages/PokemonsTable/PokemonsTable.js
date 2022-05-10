import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useNavigate } from "react-router";
import { ListContext } from "../../contexts/ListContext";

export function PokemonsTable() {
  const { pokemons } = useContext(PokemonsContext);
  const navigate = useNavigate();
  const { setIdPokemon } = useContext(ListContext);


  return (
      <ul>
        {pokemons.map(({ name }, id) => (  // map through the pokemons array and return a list item for each pokemon
          <li key={id}>
            <button onClick={() => {
              setIdPokemon(`${id}`);
              navigate(`/pokemon/${id}`);
            } }>
              <h3>{name}</h3>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (Number(id) +1) +".svg"} alt={name} />
            </button>
          </li> // end of list item
        ))}
      </ul>
  );
}