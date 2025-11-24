import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function BigCounterBox() {
  const { counter } = useContext(CounterContext);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
}

export default BigCounterBox;
