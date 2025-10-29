import { useEffect, useState } from "react";

function PokeCard({ url }) {
  const [pokeInfo, setPokeInfo] = useState({ types: [] });

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const result = await response.json();
      setPokeInfo(result);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center w-50 h-75 rounded-xl bg-blue-200 p-5 shadow-xl">
        <img
          src={pokeInfo.sprites?.other["official-artwork"].front_default}
          alt=""
        />
        <div>NAME: {pokeInfo.name}</div>
        <div>WEIGHT: {pokeInfo.weight} lbs</div>
        <div>Types:</div>
        {/* <div>{pokeInfo.types?.[0].type.name}</div> */}
        <div>
          {pokeInfo.types.map((value) => (
            <span>{value.type.name} </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default PokeCard;
