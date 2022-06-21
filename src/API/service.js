import axios from "axios";

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
