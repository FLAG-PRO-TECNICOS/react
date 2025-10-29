import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then(function (result) {
        console.log(result);
        setPokeList(result.results);
      });
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
