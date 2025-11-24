import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function SmallCounterBox() {
  const { counter } = useContext(CounterContext);

  return (
    <>
      <h4>{counter}</h4>
    </>
  );
}

export default SmallCounterBox;
