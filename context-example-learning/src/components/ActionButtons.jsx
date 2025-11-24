import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function ActionButtons() {
  const { setCounter } = useContext(CounterContext);

  function handleButton() {
    setCounter((prev) => {
      return prev + 1;
    });
  }

  return (
    <>
      <button onClick={handleButton}>INCREASE!</button>
    </>
  );
}

export default ActionButtons;
