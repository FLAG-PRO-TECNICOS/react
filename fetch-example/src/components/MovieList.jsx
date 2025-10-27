import { useState } from "react";
import Movie from "./Movie";

function MovieList() {
  //   const [title, setTitle] = useState("Default movie title");
  const [films, setFilms] = useState([]);
  const [loadingText, setLoadingText] = useState("IS LOADING...");

  fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      //   setTitle(result.results[0].title);
      setFilms(result.results);
      setLoadingText("NOT LOADING ANYMORE... I'M DONE 😁");
    });

  return (
    <>
      {/* <h1>{title}</h1> */}

      <h2>{loadingText}</h2>

      {films.map((value) => (
        <Movie info={value} />
      ))}
    </>
  );
}
export default MovieList;

// TPC:
// Usar a API pokeapi.co
// mostrar uma lista com os nomes dos primeiros 20 pokemon
