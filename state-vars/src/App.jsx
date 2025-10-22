import { useState } from "react";

function App() {
  const [number, setNumber] = useState(10);

  function clickUp() {
    setNumber(number + 10);
  }

  return (
    <>
      <div>Value: {number}</div>
      <button>- 100</button>
      <button>- 1</button>
      <button>+ 1</button>
      <button>+ 100</button>
      {/* <button onClick={clickUp}>UP</button>
      <button>DOWN</button> */}
    </>
  );

  // Vamos mostrar um valor
  // Ao clicar no UP somamos 1 ao valor
  // Ao clicar no Down subtraimos 1 ao valor

  // mais 2 botoes
  // um para subir 100
  // outro para descer 100
}

export default App;
