import { useEffect, useState } from "react";

function PokemonDetailsView({ params }) {
  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + params.pokemon;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPokeInfo(result);
      });
  }, [params]);

  return (
    <>
      <h2>Slug: {params.pokemon}</h2>
      {pokeInfo ? (
        <div>
          <div>{pokeInfo.name}</div>
          <div>{pokeInfo.weight}</div>
          <img src={pokeInfo.sprites.front_default} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default PokemonDetailsView;
