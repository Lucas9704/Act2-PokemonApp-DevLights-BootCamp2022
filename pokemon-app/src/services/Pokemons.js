import {API} from "./api";

export const getPokemons = ( ) => {
    return API.get("api/v2/pokemon");
}