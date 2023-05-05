import axios from "axios";
const baseURL = "https://pokemonbyajinkya.ajinkyanarwade.repl.co";

export const getPokemonsApi = async () => {
  const configObject = {
    method: "get",
    url: `${baseURL}/list-pokemon?offset=10&limit=20`,
  };

  const response = await axios(configObject);
  return response.data;
};
