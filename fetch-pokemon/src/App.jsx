import { useEffect, useState } from "react";

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
      <ul>
        {pokeList.map((value) => (
          <li>{value.url}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
