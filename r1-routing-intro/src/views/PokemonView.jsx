import { useEffect, useState } from "react";
import { Link } from "wouter";

function PokemonView() {
  const [pokeList, setPokeList] = useState([]);
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setPokeList(result.results);
      });
  }, []);

  return (
    <>
      <ul>
        {pokeList.map((value) => (
          <li>
            <Link to={`/pokemon/${value.name}`}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokemonView;
