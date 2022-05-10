import {API} from "./api";

export function getPokemon( id ) {
    return API.get(`api/v2/pokemon/${id}`);
}