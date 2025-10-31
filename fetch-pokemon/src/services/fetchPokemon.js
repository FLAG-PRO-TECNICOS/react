export async function getPokemonList() {

    const response = await fetch("http://pokeapi.co/api/v2/pokemon");
    const result = await response.json();

    return result.results;
}

export async function getPokemonInfo(url) {

    const response = await fetch(url);
    const result = await response.json();

    return result;
}

// export default { 
//     getPokemonList, 
//     getPokemonInfo
// };