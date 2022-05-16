import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { Grid, Card, CardMedia, CardContent, Typography} from "@mui/material";

export function PokemonCard() {
  const { pokemon, id } = useContext(PokemonContext);
  console.log(pokemon);
  return (
    <Card sx={{
      bgcolor: '#0011ffdc',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      width: "75%",
      maxWidth: 500,
      minWidth: 200,
      margin: '0 auto',
      color: 'white',
      border: '1px solid white',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #ffffff',
        color: '#ffffff',
        backgroundColor: '#eb4444',
        },
    }}>
      <Card className="dex">
        <Typography  fontSize="25px" fontWeight="bold" component="text" position="sticky" left="95%" p="5px" borderRadius="20px" backgroundColor="#dfca10" sx={{textTransform: 'capitalize' , color: 'black'}}>
          {pokemon.order < 10 ? `00${pokemon.order}` : `0${pokemon.order}`}
        </Typography>
        <CardMedia align="center">
          <img id="img" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (Number(id) + 1) + ".svg"} alt="poke"/>
        </CardMedia>
      </Card>
      <Typography mr="15px" fontSize="25px" component="p"  sx={{textTransform: 'capitalize'}}>{pokemon.name}</Typography>
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography component="p" sx={{textTransform: 'capitalize'}}>Weight: {pokemon.weight}</Typography>
          </Grid>
            <Typography pt="8px" component="p" sx={{textTransform: 'capitalize'}}>Height: {pokemon.height}</Typography>
          <Grid item xs={6}>  
            <Typography component="p" sx={{textTransform: 'capitalize'}}>Types: {pokemon.types.map(({ type }, idx) => {
              return (
                <span key={idx}>
                  {type.name}
                  {idx < pokemon.types.length - 1 ? ", " : ""}
                </span>
              );
            })}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="p" sx={{textTransform: 'capitalize'}}>Abilities: {pokemon.abilities.map(({ ability }) => ability.name).join(", ")}</Typography>
          </Grid>   
        </Grid>  
          <Typography component="p" sx={{textTransform: 'capitalize'}}>Stats: </Typography>
          <ul>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {pokemon.stats.map(({ stat, base_stat }, idx) => (
                <Grid item xs={6} key={idx}>
                  <li>
                    <Typography mr="15px" component="p" sx={{textTransform: 'capitalize'}}>{stat.name}: {base_stat}</Typography>
                  </li>
                </Grid>
              ))}
            </Grid>
          </ul>
        <Typography mt="5px" component="p" sx={{textTransform: 'capitalize'}}>Base exp: {pokemon.base_experience} EXP</Typography>
      </CardContent>
    </Card>
  );
}