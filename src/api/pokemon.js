import axios from "axios";

const urlApi = 'https://pokeapi.co/api/v2/pokemon';
const getPokemons = async () => {
  try {
    const url = `${urlApi}?limit=25&offset=0`;
    var httpResponse = await axios.get(url)
    var response = await httpResponse.data.results;
    return response;

  } catch (error) {
    console.error(error);
  }
}

const getPokemonDetails = async (name) => {
  const url = `${urlApi}/${name}`;
  
  try {
    var httpResponse = await axios.get(url)
    var response = await httpResponse.data;
    return response;

  } catch (error) {
    console.error(error);
  }
}

export { getPokemons, getPokemonDetails }

