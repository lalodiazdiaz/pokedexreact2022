import axios from "axios";

export const getPokeData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

export const pokemon = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
