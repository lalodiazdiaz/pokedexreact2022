import axios from "axios";

/**Urls poke api */

export const urlGen1 = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
export const urlGen2 = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
export const urlGen3 = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
export const urlGen4 = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";
export const urlGen5 = "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493";
export const urlGen6 = "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649";
export const urlGen7 = "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721";
export const urlGen8 = "https://pokeapi.co/api/v2/pokemon?limit=96&offset=809";

/**get all pokemon */
export const getPokeData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
/**get pokemon details */
export const pokemon = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

/**get type effective */

export const typeEfective = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

/**get pokemon species */

export const pokemonSpecies = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
