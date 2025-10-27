function App() {
  // function go() {
  //   console.log("TESTE!");

  //   const promiseResult = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  //   console.log(promiseResult);

  //   promiseResult.then(function () {
  //     console.log("A HTTP RESPONSE CHEGOU...");
  //     console.log(promiseResult);
  //   });

  //   console.log("CA ESTOU EU!");
  // }

  function go() {
    const url = "https://swapi.dev/api/films";

    fetch(url)
      .then(function (response) {
        response
          .json()
          .then(function (result) {
            console.log(result);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <button onClick={go}>GO</button>
    </>
  );
}

export default App;
