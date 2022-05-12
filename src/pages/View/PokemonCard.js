import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { Card, CardMedia, CardContent, Typography} from "@mui/material";

export function PokemonCard() {
  const { pokemon, id } = useContext(PokemonContext);

  return (
    <Card sx={{
      bgcolor: '#0011ffdc',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 100,
      maxWidth: 500,
      margin: '0 auto',
      color: 'white',
      border: '1px solid white',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #ffffff',
        color: '#ffffff',
        backgroundColor: '#eb4444',
        },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <CardMedia>
        <img id="img" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (Number(id) + 1) + ".svg"} alt="poke"/>
      </CardMedia>
      <CardContent>
        <Typography component="p" sx={{textTransform: 'capitalize'}}>{pokemon.name}</Typography>
        <Typography component="p" sx={{textTransform: 'capitalize'}}> {pokemon.order}</Typography>
        <Typography component="p" sx={{textTransform: 'capitalize'}}>Weight: {pokemon.weight}</Typography>
        <Typography component="p" sx={{textTransform: 'capitalize'}}>Height: {pokemon.height}</Typography>
        <Typography component="p" sx={{textTransform: 'capitalize'}}>Types: {pokemon.types.map(({ type }, idx) => {
          return (
            <span key={idx}>
              {type.name}
              {idx < pokemon.types.length - 1 ? ", " : ""}
            </span>
          );
        })}
        </Typography>
        <Typography component="p" sx={{textTransform: 'capitalize'}}>Abilities: {pokemon.abilities.map(({ ability }) => ability.name).join(", ")}</Typography>
          <Typography component="p" sx={{textTransform: 'capitalize'}}>
            Stats:
          </Typography>
          <ul>
            {pokemon.stats.map(({ stat, base_stat }, idx) => (
              <li key={idx}>
                <Typography component="p" sx={{textTransform: 'capitalize'}}>{stat.name}: {base_stat}</Typography>
              </li>
            ))}
          </ul>
        <Typography component="p" sx={{textTransform: 'capitalize'}}>Base exp: {pokemon.base_experience} EXP</Typography>
      </CardContent>
    </Card>
  );
}