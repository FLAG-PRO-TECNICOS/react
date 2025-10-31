import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";
import { getPokemonList } from "./services/fetchPokemon";

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getPokemonList();
      setPokeList(result);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {pokeList.map((value) => (
          <PokeCard url={value.url} />
        ))}
      </div>
    </>
  );
}

export default App;
