import { useEffect, useState } from "react";

function PokeCard() {
  const [pokeInfo, setPokeInfo] = useState({});

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/7";
    fetch(url); // ...
  }, []);

  return (
    <>
      <div>
        <img src="" alt="" />
        <div>NAME</div>
        <div>WEIGHT</div>
      </div>
    </>
  );
}

export default PokeCard;
