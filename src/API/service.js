import axios from "axios";

export const getPokeData = async (url) => {
  const result = await axios.get(url);
  return result.data;
};

export const pokemon = async (url) => {
  const result = await axios.get(url);
  console.log(result.data);
  return result.data;
};
