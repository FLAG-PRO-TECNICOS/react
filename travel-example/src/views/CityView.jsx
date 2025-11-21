import { useEffect, useState } from "react";
import data from "../assets/data.json";

function CityView({ params }) {
  const [city, setCity] = useState({});

  useEffect(() => {
    (() => {
      const filtered = data.filter((value) => {
        const current = "/cities/" + params.cityname;
        return current == value.url;
      });
      //   console.log(filtered);

      setCity(filtered[0]);
    })();
  }, [params]);

  return (
    <>
      <h1>THIS IS {params.cityname}</h1>
      <h2>{city.city}</h2>
      <p>{city.text}</p>
    </>
  );
}

export default CityView;
