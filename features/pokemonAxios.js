import axios from "axios";

const pokeApi = axios.create({
    baseURL: "https://pokemonbyajinkya.ajinkyanarwade.repl.co"
});

export default pokeApi;