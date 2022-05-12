import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useNavigate } from "react-router";
import { Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";
import PaginationRounded from "./PaginationRounded";
import './PokemonsTable.css'

export function PokemonsTable() {
  const { pokemons } = useContext(PokemonsContext);
  const navigate = useNavigate();


  return (
    <>
      <PaginationRounded/>
      <Grid container spacing={0} className="grid">
        {pokemons.map(({ name }, id) => (  // map through the pokemons array and return a list item for each pokemon
          <Card className="card" key={id}>
            <CardContent className="cardContent">
              <Button className="buttonCard" onClick={() => {
                navigate(`/pokemon/${id}`);
              } }>
                <Typography component="p">{name}</Typography>
                <CardMedia>
                  <img id="pokemon" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (Number(id) +1) +".svg"} alt={name} />
                </CardMedia>
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <PaginationRounded />
    </>
    
  );
}